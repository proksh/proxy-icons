import * as React from "react";
import { IconProps } from "./types";

export const ProUnlock2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 14v4h-2v-4z" />
        <path
          fill={color}
          d="M5 1a5 5 0 0 0-5 5v1h2V6a3 3 0 0 1 6 0v3H4v13h16V9H10V6a5 5 0 0 0-5-5m1 10h12v9H6z"
        />
      </svg>
    );
  },
);

export default ProUnlock2Line;
