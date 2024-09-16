import * as React from "react";
import { IconProps } from "./types";

export const ProFileForbidFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.914 2H3v20h9.255A7 7 0 0 1 21 11.674V7.086z"
        />
        <path
          fill={color}
          d="M13 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 0 0-2.708 4.294l4.002-4.002A3 3 0 0 0 18 15m0 6a3 3 0 0 0 2.708-4.293l-4.001 4c.391.188.83.293 1.293.293"
        />
      </svg>
    );
  },
);

export default ProFileForbidFill;