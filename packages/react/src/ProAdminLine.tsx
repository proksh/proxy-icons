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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M13 16c0-.711.148-1.387.416-2H8a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3z"
        />
        <path
          fill={color}
          d="M14 22h8v-5h-1v-1a3 3 0 1 0-6 0v1h-1zm2-3v1h4v-1zm3-2v-1a1 1 0 1 0-2 0v1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAdminLine;
