import * as React from "react";
import { IconProps } from "./types";

export const ProMailForbidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h9.5v-2H4V7.227l8 7.111 8-7.11V12h2zm-2.505 2L12 11.662 4.506 5z"
        />
        <path
          fill={color}
          d="M13 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 0 0-2.708 4.294l4.002-4.002A3 3 0 0 0 18 15m2.708 1.707-4.001 4a3 3 0 0 0 4.001-4.001"
        />
      </svg>
    );
  },
);

export default ProMailForbidLine;
