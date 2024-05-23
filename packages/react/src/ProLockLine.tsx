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
          d="M12 2a5 5 0 0 0-5 5v2H5l-1 1v11l1 1h14l1-1V10l-1-1h-2V7a5 5 0 0 0-5-5m3 7V7a3 3 0 1 0-6 0v2zm-9 2v9h12v-9z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProLockLine;
