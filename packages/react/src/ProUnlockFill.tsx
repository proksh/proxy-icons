import * as React from "react";
import { IconProps } from "./types";

export const ProUnlockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 1a5 5 0 0 0-5 5v1h2V6a3 3 0 0 1 6 0v3H4v13h16V9H10V6a5 5 0 0 0-5-5m8.5 12v3H13v2h-2v-2h-.5v-3z"
        />
        <path
          stroke={color}
          d="M12 18v-4"
          strokeLinejoin="bevel"
          strokeWidth="2"
        />
        <path
          stroke={color}
          d="M13.5 14.5h-3"
          strokeLinejoin="bevel"
          strokeWidth="3"
        />
      </svg>
    );
  },
);

export default ProUnlockFill;
