import * as React from "react";
import { IconProps } from "./types";

export const ProLockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 16v2h-2v-2h-.5v-3h3v3z" />
        <path
          fill={color}
          d="M12 2a5 5 0 0 0-5 5v2H4v13h16V9h-3V7a5 5 0 0 0-5-5m3 7H9V7a3 3 0 1 1 6 0zm-9 2h12v9H6z"
        />
      </svg>
    );
  },
);

export default ProLockLine;
