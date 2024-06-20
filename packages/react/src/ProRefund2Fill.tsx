import * as React from "react";
import { IconProps } from "./types";

export const ProRefund2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6V4H2v5.5h5.5v-2H5.384A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.99 9.99 0 0 0-8 4"
        />
        <path
          fill={color}
          d="M8 10.5A2.5 2.5 0 0 1 10.5 8h.5V6h2v2h2.5v2h-5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5H13v2h-2v-2H8.5v-2h5a.5.5 0 0 0 0-1h-3A2.5 2.5 0 0 1 8 10.5"
        />
      </svg>
    );
  },
);

export default ProRefund2Fill;
