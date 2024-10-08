import * as React from "react";
import { IconProps } from "./types";

export const ProDonutChartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.394 16.192A7.002 7.002 0 0 1 11 5.071V2.049C5.947 2.551 2 6.815 2 12c0 2.401.846 4.605 2.257 6.329zm1.414 1.414L5.67 19.743A9.95 9.95 0 0 0 11 21.951v-3.022a6.96 6.96 0 0 1-3.193-1.323M13 18.93v3.02c5.053-.501 9-4.765 9-9.95s-3.947-9.449-9-9.95v3.02a7.002 7.002 0 0 1 0 13.86"
        />
      </svg>
    );
  },
);

export default ProDonutChartFill;
