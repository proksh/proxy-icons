import * as React from "react";
import { IconProps } from "./types";

export const ProEye2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m11.333-1.333V8H12a4 4 0 1 0 4 4v-1.333z"
        />
      </svg>
    );
  },
);

export default ProEye2Fill;
