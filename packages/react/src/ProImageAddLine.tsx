import * as React from "react";
import { IconProps } from "./types";

export const ProImageAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h12v-2H6.914L14 11.914l3 3v-2.828l-3-3L4.086 19H4V5h16v9h2z"
        />
        <path
          fill={color}
          d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11 9h-3v-2h3v-3h2v3h3v2h-3v3h-2z"
        />
      </svg>
    );
  },
);

export default ProImageAddLine;
