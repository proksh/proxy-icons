import * as React from "react";
import { IconProps } from "./types";

export const ProPaintBrushFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v5l-1 1H4L3 9zm11 12h-1v-4H6v-1H4v3h7v2h-1v6h4zm5.5 2c1.38 0 2.5-1.102 2.5-2.461C22 14.179 19.5 12 19.5 12S17 14.179 17 15.539C17 16.898 18.12 18 19.5 18"
        />
      </svg>
    );
  },
);

export default ProPaintBrushFill;
