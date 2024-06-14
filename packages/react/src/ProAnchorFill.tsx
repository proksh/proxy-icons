import * as React from "react";
import { IconProps } from "./types";

export const ProAnchorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 6a4 4 0 1 1 5 3.874v10.064A8.004 8.004 0 0 0 19.938 13h-3.3l4.124-6.224.669 1.89A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-1.167.2-2.29.57-3.333l.668-1.891L7.362 13h-3.3A8.004 8.004 0 0 0 11 19.938V9.874A4 4 0 0 1 8 6m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </svg>
    );
  },
);

export default ProAnchorFill;
