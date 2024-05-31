import * as React from "react";
import { IconProps } from "./types";

export const ProGhostFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 11a9 9 0 0 1 18 0v7.5a3.5 3.5 0 0 1-6.14 2.297A4 4 0 0 1 12 22c-1.12 0-2.133-.46-2.86-1.203A3.5 3.5 0 0 1 3 18.5zm6.5-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5c0-1.38-.895-2.5-2-2.5s-2 1.12-2 2.5.895 2.5 2 2.5 2-1.12 2-2.5"
        />
      </svg>
    );
  },
);

export default ProGhostFill;
