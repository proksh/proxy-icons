import * as React from "react";
import { IconProps } from "./types";

export const ProHailFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 2a7 7 0 0 1 6.327 4.002L17.5 6a6.5 6.5 0 0 1 6.495 6.755Q24 12.877 24 13a6 6 0 0 1-5.642 5.99q.14-.473.142-.99a3.5 3.5 0 0 0-5.004-3.161A3.5 3.5 0 1 0 8.196 18a3.5 3.5 0 0 0-1.069 1H5.5A5.5 5.5 0 0 1 4.046 8.195 7 7 0 0 1 11 2"
        />
        <path
          fill={color}
          d="M17 18a2 2 0 1 1-4 0 2 2 0 1 1 4 0m-7-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProHailFill;
