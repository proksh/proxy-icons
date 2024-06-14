import * as React from "react";
import { IconProps } from "./types";

export const ProGlobeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 10a8 8 0 0 0-4-6.93l1-1.732A10 10 0 0 1 22 10c0 5.185-3.947 9.449-9 9.95V21h5v2H6v-2h5v-1.05a10 10 0 0 1-7.684-4.988l1.736-.993q.053.093.11.185A8 8 0 0 0 20 10"
        />
        <path fill={color} d="M5 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0" />
      </svg>
    );
  },
);

export default ProGlobeFill;
