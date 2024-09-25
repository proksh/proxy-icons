import * as React from "react";
import { IconProps } from "./types";

export const ProAdminLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M13.416 14A5 5 0 0 0 13 16H8a3 3 0 0 0-3 3v3H3v-3a5 5 0 0 1 5-5z"
        />
        <path
          fill={color}
          d="M15 16a3 3 0 1 1 6 0v3h-6zm3-1a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M14 17h8v5h-8zm2 2v1h4v-1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAdminLine;
