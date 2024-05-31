import * as React from "react";
import { IconProps } from "./types";

export const ProScrollToBottomLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.793 13.707 1.414-1.414L12 15.086l2.793-2.793 1.414 1.414L12 17.914zM11 6v5h2V6z"
        />
        <path
          fill={color}
          d="M11.8 2h.4c1.669 0 2.748 0 3.654.294a6 6 0 0 1 3.852 3.852C20.001 7.052 20 8.13 20 9.8v4.4c0 1.669 0 2.748-.294 3.654a6 6 0 0 1-3.852 3.852c-.906.295-1.985.294-3.654.294h-.4c-1.669 0-2.748 0-3.654-.294a6 6 0 0 1-3.852-3.852C3.999 16.948 4 15.87 4 14.2V9.8c0-1.669 0-2.748.294-3.654a6 6 0 0 1 3.852-3.852C9.052 1.999 10.13 2 11.8 2m.2 2c-1.94 0-2.672.012-3.236.196a4 4 0 0 0-2.568 2.568C6.012 7.328 6 8.06 6 10v4c0 1.94.012 2.672.196 3.236a4 4 0 0 0 2.568 2.568C9.328 19.988 10.06 20 12 20s2.672-.012 3.236-.196a4 4 0 0 0 2.568-2.568C17.988 16.672 18 15.94 18 14v-4c0-1.94-.012-2.672-.196-3.236a4 4 0 0 0-2.568-2.568C14.671 4.012 13.94 4 12 4"
        />
      </svg>
    );
  },
);

export default ProScrollToBottomLine;
