import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 6h6v2H9zm6 10H9v2h6z" />
        <path
          fill={color}
          d="M3 2h18v8h-1a2 2 0 1 0 0 4h1v8H3v-8h1a2 2 0 1 0 0-4H3zm2 2v4.126a4.002 4.002 0 0 1 0 7.748V20h14v-4.126a4.002 4.002 0 0 1 0-7.748V4z"
        />
      </svg>
    );
  },
);

export default ProCoupon5Line;
