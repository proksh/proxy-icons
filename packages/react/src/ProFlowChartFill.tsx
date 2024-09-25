import * as React from "react";
import { IconProps } from "./types";

export const ProFlowChartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 7h5.757L17 9.243V15h-2v2H9v-2H3v6h6v-2h6v2h6v-6h-2V9.243L22.243 6 18 1.757 14.757 5H9V3H3v6h6z"
        />
      </svg>
    );
  },
);

export default ProFlowChartFill;
