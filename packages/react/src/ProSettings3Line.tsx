import * as React from "react";
import { IconProps } from "./types";

export const ProSettings3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.928 8a8 8 0 0 0-2.092-2.376l1.53-2.65-1.732-1-1.531 2.652a8 8 0 0 0-6.206 0L7.366 1.973l-1.732 1 1.53 2.651A8 8 0 0 0 4.063 11H1v2h3.06a8 8 0 0 0 1.012 3 8 8 0 0 0 2.092 2.376l-1.53 2.65 1.732 1 1.531-2.652a8 8 0 0 0 6.206 0l1.53 2.652 1.733-1-1.531-2.651A8 8 0 0 0 19.938 13H23v-2h-3.06a8 8 0 0 0-1.012-3M6.804 15a6 6 0 1 1 10.392-6 6 6 0 0 1-10.392 6"
        />
      </svg>
    );
  },
);

export default ProSettings3Line;
