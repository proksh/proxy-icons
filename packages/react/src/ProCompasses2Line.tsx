import * as React from "react";
import { IconProps } from "./types";

export const ProCompasses2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 2v2.126a4.002 4.002 0 0 0-1.79 6.74L3.132 21.505l1.736.992 3.562-6.232A9 9 0 0 0 12 17a9 9 0 0 0 3.57-.736l3.562 6.232 1.736-.992-3.562-6.234A8.99 8.99 0 0 0 21 8h-2a6.99 6.99 0 0 1-2.694 5.52l-1.516-2.653A4.002 4.002 0 0 0 13 4.127V1.999zm1 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 6q.549-.002 1.054-.14l1.516 2.653A7 7 0 0 1 12 15a7 7 0 0 1-2.57-.486l1.516-2.654q.506.138 1.054.14"
        />
      </svg>
    );
  },
);

export default ProCompasses2Line;
