import * as React from "react";
import { IconProps } from "./types";

export const ProCouponFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v7h1a2 2 0 1 1 0 4H2v7h20v-7h-1a2 2 0 1 1 0-4h1V3zm7 6h6v2H9zm0 4h6v2H9z"
        />
      </svg>
    );
  },
);

export default ProCouponFill;
