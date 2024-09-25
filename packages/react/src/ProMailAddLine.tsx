import * as React from "react";
import { IconProps } from "./types";

export const ProMailAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h12v-2H4V7.227l8 7.111 8-7.11V13h2zm-2.505 2L12 11.662 4.506 5z"
        />
        <path fill={color} d="M21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2z" />
      </svg>
    );
  },
);

export default ProMailAddLine;
