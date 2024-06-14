import * as React from "react";
import { IconProps } from "./types";

export const ProMailLockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h11v-2H4V7.227l8 7.111 8-7.11V12h2zm-2.505 2L12 11.662 4.506 5z"
        />
        <path
          fill={color}
          d="M22 17h1v5h-8v-5h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProMailLockLine;
