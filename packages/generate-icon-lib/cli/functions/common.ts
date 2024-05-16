import { load } from "cheerio";
import { optimize } from "svgo";
import prettier from "prettier";
import path from "path";
import _ from "lodash";
import { Icon } from "../types.js";

export const transformers = {
  /* Pass SVG through SVGO to reduce size. */
  async passSVGO(svgRaw: string) {
    const result = optimize(svgRaw, {
      multipass: true,
    });
    return result.data as string;
  },
  /* Swaps out all colors (except for "non") for stroke and fill to "currentColor". */
  injectCurrentColor(svgRaw: string) {
    const $ = load(svgRaw, { xmlMode: true });
    $("*").each((i, el: any) => {
      Object.keys(el.attribs).forEach((attrKey) => {
        if (["fill", "stroke"].includes(attrKey)) {
          const val = $(el).attr(attrKey);
          if (val !== "none") {
            $(el).attr(attrKey, "currentColor");
          }
        }
      });
    });

    return $.xml();
  },
  prettify(svgRaw: string) {
    const prettierOptions = prettier.resolveConfig(process.cwd());
    return prettier.format(svgRaw, { ...prettierOptions, parser: "html" });
  },
  readyForJSX(svgRaw: string) {
    const $ = load(svgRaw, { xmlMode: true });
    $("*").each((i, el: any) => {
      Object.keys(el.attribs).forEach((attrKey) => {
        if (attrKey.includes("-")) {
          $(el)
            .attr(_.camelCase(attrKey), el.attribs[attrKey])
            .removeAttr(attrKey);
        }
        if (attrKey === "class") {
          $(el).attr("className", el.attribs[attrKey]).removeAttr(attrKey);
        }
      });
    });
    return $("svg")
      .attr("props", "...")
      .attr("ref", "forwardedRef")
      .toString()
      .replace(/stroke=['|"]currentColor['|"]/g, "stroke={color}")
      .replace(/fill=['|"]currentColor['|"]/g, "fill={color}")
      .replace('props="..."', "{...props}")
      .replace('ref="forwardedRef"', "ref={forwardedRef}");
  },
};

export const labelling = {
  typeFromFrameNodeName(nodeName: string): string {
    const base = path.dirname(nodeName);
    const trimmed = base.trim();
    const camelCased = _.camelCase(trimmed);
    return camelCased;
  },
  filePathFromIcon(icon: Icon): string {
    return path.join("icons", icon.category, `${icon.svgName}.svg`);
  },
};
