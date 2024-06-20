import * as React from "react";
import { IconProps } from "./types";

export const ProScissors2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.764 2.354 12 9.724l6.236-7.37a2 2 0 0 1 .235 2.819l-5.161 6.1 2.738 3.235a4 4 0 1 1-1.448 1.385L12 12.82l-2.6 3.073a4 4 0 1 1-1.448-1.385l2.738-3.236-5.161-6.1a2 2 0 0 1 .235-2.818M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </svg>
    );
  },
);

export default ProScissors2Line;
