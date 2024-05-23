import * as React from "react";
import { IconProps } from "./types";

export const ProUnlockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 18v-2h.5v-3h-3v3h.5v2z" />
        <path
          fill={color}
          d="M5 1a5 5 0 0 0-5 5v1h2V6a3 3 0 0 1 6 0v3H5l-1 1v11l1 1h14l1-1V10l-1-1h-9V6a5 5 0 0 0-5-5m1 19v-9h12v9z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUnlockLine;
