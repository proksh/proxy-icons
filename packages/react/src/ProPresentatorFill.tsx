import * as React from "react";
import { IconProps } from "./types";

export const ProPresentatorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 7 3 8v14h2v-6h2v6h2V9h4.5V7z"
        />
        <path
          fill={color}
          d="M10 16h4.382l3 6h2.236l-3-6H20l1-1V4l-1-1H10v2h9v9h-9z"
        />
      </svg>
    );
  },
);

export default ProPresentatorFill;
