import * as React from "react";
import { IconProps } from "./types";

export const ProBubbleChartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M14.5 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M13 19a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
      </svg>
    );
  },
);

export default ProBubbleChartLine;
