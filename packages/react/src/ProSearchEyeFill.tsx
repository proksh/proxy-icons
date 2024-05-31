import * as React from "react";
import { IconProps } from "./types";

export const ProSearchEyeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 2a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m1.167 7.333H14V10.5A3.5 3.5 0 1 1 10.5 7h1.167zM18 17l4 4-1.414 1.414-4-4z"
        />
      </svg>
    );
  },
);

export default ProSearchEyeFill;
