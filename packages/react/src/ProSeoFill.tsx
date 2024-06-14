import * as React from "react";
import { IconProps } from "./types";

export const ProSeoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 3a7 7 0 0 0 0 14h1.07a7 7 0 0 1 13.256-4A7 7 0 0 0 16 3z"
        />
        <path
          fill={color}
          d="M16 11a5 5 0 1 0 2.757 9.172l2.536 2.535 1.414-1.414-2.535-2.536A5 5 0 0 0 16 11"
        />
      </svg>
    );
  },
);

export default ProSeoFill;
