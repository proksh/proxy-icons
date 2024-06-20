import * as React from "react";
import { IconProps } from "./types";

export const ProPuzzle2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 1a4 4 0 0 0-4 4H3v16h18v-6.585l-1.333.472a2 2 0 1 1 0-3.773l1.333.47V5h-6a4 4 0 0 0-4-4"
        />
      </svg>
    );
  },
);

export default ProPuzzle2Fill;
