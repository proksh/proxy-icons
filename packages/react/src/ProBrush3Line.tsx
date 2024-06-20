import * as React from "react";
import { IconProps } from "./types";

export const ProBrush3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 2v4H2v7h1.5v8l1 1h15l1-1v-8H22V6h-6V2zM5.5 13h13v7H10v-4.5H8V20H5.5zM20 11H4V8h6V4h4v4h6z"
        />
      </svg>
    );
  },
);

export default ProBrush3Line;
