import * as React from "react";
import { IconProps } from "./types";

export const ProReplay5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6V3.5H2v6h6v-2H5.384A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.98 9.98 0 0 0-8 4"
        />
        <path
          fill={color}
          d="M9.75 8.75h4.75v1.5h-3.25v1h1.5a2 2 0 1 1 0 4H9.5v-1.5h3.25a.5.5 0 0 0 0-1h-3z"
        />
      </svg>
    );
  },
);

export default ProReplay5Line;
