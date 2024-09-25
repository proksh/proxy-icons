import * as React from "react";
import { IconProps } from "./types";

export const ProPieChartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-1 2.062A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7H11zM19.938 11A8.004 8.004 0 0 0 13 4.062V11z"
        />
      </svg>
    );
  },
);

export default ProPieChartLine;
