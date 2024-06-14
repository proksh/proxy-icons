import * as React from "react";
import { IconProps } from "./types";

export const ProBellFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 3q0 .111-.012.22a9.02 9.02 0 0 1 6.29 5.24l-.105-.028C18.02 7.845 15.132 7.5 12 7.5s-6.02.345-8.173.932l-.104.028a9.02 9.02 0 0 1 6.289-5.24A2 2 0 1 1 14 3m9 9c0 .672-.81 1.292-2.178 1.793A9.01 9.01 0 0 1 13 20.945v-4.213A2 2 0 0 0 12 13a2 2 0 0 0-1 3.732v4.213a9.01 9.01 0 0 1-7.821-7.152C1.81 13.293 1 12.672 1 12s.81-1.292 2.179-1.793C4.804 9.615 7.216 9.19 9.994 9.05A39 39 0 0 1 12 9c6.075 0 11 1.343 11 3"
        />
      </svg>
    );
  },
);

export default ProBellFill;
