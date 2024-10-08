import * as React from "react";
import { IconProps } from "./types";

export const ProMailUnreadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        <path
          fill={color}
          d="M2 3h14.1a5 5 0 0 0 0 2H4.505L12 11.662l5.1-4.533c.425.529.955.97 1.559 1.29L12 14.338 4 7.227V19h16V8.9a5 5 0 0 0 2 0V21H2z"
        />
      </svg>
    );
  },
);

export default ProMailUnreadLine;
