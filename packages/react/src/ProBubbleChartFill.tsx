import * as React from "react";
import { IconProps } from "./types";

export const ProBubbleChartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M16 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
      </svg>
    );
  },
);

export default ProBubbleChartFill;
