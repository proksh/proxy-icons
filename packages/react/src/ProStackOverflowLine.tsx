import * as React from "react";
import { IconProps } from "./types";

export const ProStackOverflowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.001 20.003V15h2v7.003h-16V15h2v5.003zM7.501 18v-2h9v2zm.077-4.38.347-1.97 8.864 1.563-.348 1.97zm1.634-5.504 1-1.732 7.794 4.5-1 1.732zm3.417-4.613 1.532-1.285 5.785 6.894-1.532 1.286z"
        />
      </svg>
    );
  },
);

export default ProStackOverflowLine;
