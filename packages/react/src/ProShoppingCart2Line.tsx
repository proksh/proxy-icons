import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingCart2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.793 3.207 4 6.414V18l1 1h12v-2H6v-2h12l.954-.702 2.5-8L20.5 5H5.414L2.207 1.793zM6 7h13.14l-1.875 6H6z"
        />
        <path
          fill={color}
          d="M.793 3.207 4 6.414V18l1 1h12v-2H6v-2h12l.954-.702 2.5-8L20.5 5H5.414L2.207 1.793zM6 7h13.14l-1.875 6H6z"
        />
        <path
          fill={color}
          d="M.793 3.207 4 6.414V18l1 1h12v-2H6v-2h12l.954-.702 2.5-8L20.5 5H5.414L2.207 1.793zM6 7h13.14l-1.875 6H6zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path fill={color} d="M7 21.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        <path
          fill={color}
          d="M7 21.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path fill={color} d="M17.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        <path fill={color} d="M17.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      </svg>
    );
  },
);

export default ProShoppingCart2Line;
