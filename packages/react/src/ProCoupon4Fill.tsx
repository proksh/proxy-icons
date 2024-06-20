import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h8v-1a2 2 0 1 1 4 0v1h8V3h-8v1a2 2 0 1 1-4 0V3zm4 13V8h2v8zm10 0V8h2v8z"
        />
      </svg>
    );
  },
);

export default ProCoupon4Fill;
