import * as React from "react";
import { IconProps } from "./types";

export const ProPieChartBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M2 3h20v18H2zm11 8h3.9A5.01 5.01 0 0 0 13 7.1zm-2 2V7.1a5.002 5.002 0 0 0 1 9.9 5 5 0 0 0 4.9-4z"
        />
      </svg>
    );
  },
);

export default ProPieChartBoxFill;
