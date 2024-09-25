import * as React from "react";
import { IconProps } from "./types";

export const ProStoreLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 2H2v7a4 4 0 0 0 1 2.646V21l1 1h16l1-1v-9.354c.622-.705 1-1.632 1-2.646zm-3 10.874V20H5v-7.126a4.01 4.01 0 0 0 4-1.228A4 4 0 0 0 12 13a4 4 0 0 0 3-1.354 3.99 3.99 0 0 0 4 1.228M8 9a2 2 0 1 1-4 0V4h16v5a2 2 0 1 1-4 0V8h-2v1a2 2 0 1 1-4 0V8H8z"
        />
      </svg>
    );
  },
);

export default ProStoreLine;
