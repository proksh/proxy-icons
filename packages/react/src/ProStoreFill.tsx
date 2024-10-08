import * as React from "react";
import { IconProps } from "./types";

export const ProStoreFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 2H2v7a4 4 0 0 0 1 2.646V21l1 1h16l1-1v-9.354c.622-.705 1-1.632 1-2.646zm-6 7V8h-2v1a2 2 0 1 1-4 0V8H8v1a2 2 0 1 1-4 0V4h16v5a2 2 0 1 1-4 0"
        />
      </svg>
    );
  },
);

export default ProStoreFill;
