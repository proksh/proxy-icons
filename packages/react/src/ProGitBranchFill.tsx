import * as React from "react";
import { IconProps } from "./types";

export const ProGitBranchFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 6a3 3 0 1 1 4 2.83V12c.836-.628 1.874-1 3-1h4a3 3 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5 5 0 0 1 14 13h-4a3 3 0 0 0-2.895 2.21A3.001 3.001 0 1 1 5 15.17V8.83A3 3 0 0 1 3 6"
        />
        <path
          fill={color}
          d="M3 6a3 3 0 1 1 4 2.83V12c.836-.628 1.874-1 3-1h4a3 3 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5 5 0 0 1 14 13h-4a3 3 0 0 0-2.895 2.21A3.001 3.001 0 1 1 5 15.17V8.83A3 3 0 0 1 3 6"
        />
        <path
          fill={color}
          d="M3 6a3 3 0 1 1 4 2.83V12c.836-.628 1.874-1 3-1h4a3 3 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5 5 0 0 1 14 13h-4a3 3 0 0 0-2.895 2.21A3.001 3.001 0 1 1 5 15.17V8.83A3 3 0 0 1 3 6"
        />
      </svg>
    );
  },
);

export default ProGitBranchFill;
