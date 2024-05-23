import * as React from "react";
import { IconProps } from "./types";

export const ProMore2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-1.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    );
  },
);

export default ProMore2Line;
