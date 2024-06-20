import * as React from "react";
import { IconProps } from "./types";

export const ProRefund2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.219 5.719 2.5 4v5h5L5.643 7.143A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.98 9.98 0 0 0-7.781 3.719"
        />
        <path
          fill={color}
          d="M15.5 8H13V6h-2v2h-.5a2.5 2.5 0 0 0 0 5h3a.5.5 0 0 1 0 1h-5v2H11v2h2v-2h.5a2.5 2.5 0 0 0 0-5h-3a.5.5 0 0 1 0-1h5z"
        />
      </svg>
    );
  },
);

export default ProRefund2Line;
