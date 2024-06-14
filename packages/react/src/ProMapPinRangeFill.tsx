import * as React from "react";
import { IconProps } from "./types";

export const ProMapPinRangeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 10a8 8 0 1 1 9 7.938v2.074c3.946.092 7 .723 7 1.488 0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488v-2.074A8 8 0 0 1 4 10m8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProMapPinRangeFill;
