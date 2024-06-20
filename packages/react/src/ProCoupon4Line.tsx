import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 16V8h2v8zM6 8v8h2V8z" />
        <path
          fill={color}
          d="M2 3h8v1a2 2 0 1 0 4 0V3h8v18h-8v-1a2 2 0 1 0-4 0v1H2zm2 2v14h4.126a4.002 4.002 0 0 1 7.748 0H20V5h-4.126a4.002 4.002 0 0 1-7.748 0z"
        />
      </svg>
    );
  },
);

export default ProCoupon4Line;
