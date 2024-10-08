import * as React from "react";
import { IconProps } from "./types";

export const ProRotateLockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 12a8 8 0 1 1 16 0h-3l3.19 5.74A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c2.38 0 4.57-.833 6.286-2.223l-1.258-1.554A8 8 0 0 1 4 12"
        />
        <path
          fill={color}
          d="M16 11v5H8v-5h1v-1a3 3 0 1 1 6 0v1zm-2 2h-4v1h4zm-1-2v-1a1 1 0 1 0-2 0v1z"
        />
      </svg>
    );
  },
);

export default ProRotateLockLine;
