import * as React from "react";
import { IconProps } from "./types";

export const ProUserStarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M6 14a5 5 0 0 0-5 5v3h12.723l.448-2.256-2.556-2.364.561-1.727 3.458-.41.378-.822A5 5 0 0 0 14 14z"
        />
        <path
          fill={color}
          d="M19.41 16.558 18 13.5l-1.41 3.058-3.345.397 2.473 2.287-.657 3.303L18 20.9l2.939 1.645-.656-3.303 2.472-2.287z"
        />
      </svg>
    );
  },
);

export default ProUserStarFill;
