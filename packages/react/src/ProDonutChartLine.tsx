import * as React from "react";
import { IconProps } from "./types";

export const ProDonutChartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.68 16.906A8.001 8.001 0 0 1 11 4.062V2.049C5.947 2.551 2 6.815 2 12c0 2.401.846 4.605 2.257 6.329zm1.414 1.414-1.423 1.423a9.95 9.95 0 0 0 5.33 2.208v-2.013a7.96 7.96 0 0 1-3.907-1.618M13 19.938v2.013c5.053-.502 9-4.766 9-9.951s-3.947-9.449-9-9.95v2.012a8.001 8.001 0 0 1 0 15.876"
        />
      </svg>
    );
  },
);

export default ProDonutChartLine;
