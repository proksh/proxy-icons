import * as React from "react";
import { IconProps } from "./types";

export const ProScrollToBottomFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.8 2h.4c1.669 0 2.748 0 3.654.294a6 6 0 0 1 3.852 3.852C20.001 7.052 20 8.13 20 9.8v4.4c0 1.669 0 2.748-.294 3.654a6 6 0 0 1-3.852 3.852c-.906.295-1.985.294-3.654.294h-.4c-1.669 0-2.748 0-3.654-.294a6 6 0 0 1-3.852-3.852C3.999 16.948 4 15.87 4 14.2V9.8c0-1.669 0-2.748.294-3.654a6 6 0 0 1 3.852-3.852C9.052 1.999 10.13 2 11.8 2m-.8 9V6h2v5zm-3.207 2.707 1.414-1.414L12 15.086l2.793-2.793 1.414 1.414L12 17.914z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProScrollToBottomFill;
