import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 3h7v7h-1a2 2 0 1 0 0 4h1v7h-7zm-2 0H2v7h1a2 2 0 1 1 0 4H2v7h11z"
        />
      </svg>
    );
  },
);

export default ProCoupon2Fill;
