import * as React from "react";
import { IconProps } from "./types";

export const ProTicket2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 9H8v6h8z" />
        <path
          fill={color}
          d="M22 3H2v7h1a2 2 0 1 1 0 4H2v7h20v-7h-1a2 2 0 1 1 0-4h1zM4 8.126V5h16v3.126a4.002 4.002 0 0 0 0 7.748V19H4v-3.126a4.002 4.002 0 0 0 0-7.748"
        />
      </svg>
    );
  },
);

export default ProTicket2Line;
