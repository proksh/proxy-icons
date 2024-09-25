import * as React from "react";
import { IconProps } from "./types";

export const ProStore3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 3h18v2H3zm3 13h8v-2H6z" />
        <path
          fill={color}
          d="m20.82 6 1.4 7H21v8H3v-8H1.78l1.4-7zM19 13H5v6h14zm.78-2-.6-3H4.82l-.6 3z"
        />
      </svg>
    );
  },
);

export default ProStore3Line;
