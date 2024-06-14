import * as React from "react";
import { IconProps } from "./types";

export const ProBarChartGroupedFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        d="M14.5 1v17h3V1zm-12 17v-8h3v8zm0 2h19v2h-19zm4-2v-3h3v3zm12-14v14h3V4z"
      />
    </svg>
  );
});

export default ProBarChartGroupedFill;
