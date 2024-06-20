import * as React from "react";
import { IconProps } from "./types";

export const ProBreadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 22V10.465A4 4 0 0 1 5 3h14a4 4 0 0 1 2 7.465V22zM4 7a2 2 0 0 0 1.333 1.886L6 9.122V20h13V9.122l.667-.236A2.001 2.001 0 0 0 19 5H6a2 2 0 0 0-2 2"
        />
      </svg>
    );
  },
);

export default ProBreadLine;
