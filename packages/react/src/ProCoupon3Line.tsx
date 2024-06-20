import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="M22 3H2v18h20v-7h-1a2 2 0 1 1 0-4h1zM10.915 19a1.5 1.5 0 0 0-2.83 0H4V5h4.085a1.5 1.5 0 0 0 2.83 0H20v3.126a4.002 4.002 0 0 0 0 7.748V19z"
        />
      </svg>
    );
  },
);

export default ProCoupon3Line;
