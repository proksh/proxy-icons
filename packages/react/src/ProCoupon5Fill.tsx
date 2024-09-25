import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v8h1a2 2 0 1 1 0 4H3v8h18v-8h-1a2 2 0 1 1 0-4h1V2zm6 4h6v2H9zm0 10h6v2H9z"
        />
      </svg>
    );
  },
);

export default ProCoupon5Fill;
