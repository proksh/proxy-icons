import * as React from "react";
import { IconProps } from "./types";

export const ProStore3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 3h18v2H3zm3 13h8v-2H6z" />
        <path
          fill={color}
          d="M20.82 6H3.18l-1.4 7H3v8h18v-8h1.22zM19 13v6H5v-6z"
        />
      </svg>
    );
  },
);

export default ProStore3Fill;
