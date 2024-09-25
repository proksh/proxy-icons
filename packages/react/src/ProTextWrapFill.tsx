import * as React from "react";
import { IconProps } from "./types";

export const ProTextWrapFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 6.5H3v-3h18zm-12 14H3v-3h6z" />
        <path
          fill={color}
          d="M3 13.5h14.5a2 2 0 1 1 0 4H16V16l-1.707-.707-3 3v1.414l3 3L16 22v-1.5h1.5a5 5 0 0 0 0-10H3z"
        />
      </svg>
    );
  },
);

export default ProTextWrapFill;
