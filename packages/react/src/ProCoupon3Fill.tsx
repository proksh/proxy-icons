import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.5 3H22v7h-1a2 2 0 1 0 0 4h1v7H9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3H2V3zm0 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M9.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProCoupon3Fill;
