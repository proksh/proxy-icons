import * as React from "react";
import { IconProps } from "./types";

export const ProSeoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6 7 7 0 0 1 1.426 2A7 7 0 0 0 16 3z"
        />
        <path
          fill={color}
          d="M11 16a5 5 0 1 1 9.172 2.757l2.535 2.536-1.414 1.414-2.536-2.535A5 5 0 0 1 11 16m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        />
      </svg>
    );
  },
);

export default ProSeoLine;
