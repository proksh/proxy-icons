import * as React from "react";
import { IconProps } from "./types";

export const ProRotateLockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a8 8 0 1 0 5.028 14.223l1.258 1.554A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .14-.004.28a9.95 9.95 0 0 1-1.807 5.46L17 12h3a8 8 0 0 0-8-8"
        />
        <path
          fill={color}
          d="M15 11h1v5H8v-5h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z"
        />
      </svg>
    );
  },
);

export default ProRotateLockFill;
