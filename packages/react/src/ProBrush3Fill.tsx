import * as React from "react";
import { IconProps } from "./types";

export const ProBrush3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 2H8v4H2v7h1.5v8l1 1H8v-6h2v6h9.5l1-1v-8H22V6h-6zM4 11V8h6V4h4v4h6v3z"
        />
      </svg>
    );
  },
);

export default ProBrush3Fill;
