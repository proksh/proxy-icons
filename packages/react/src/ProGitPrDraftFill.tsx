import * as React from "react";
import { IconProps } from "./types";

export const ProGitPrDraftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 6c0 1.306.835 2.417 2 2.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 1 0 3 6"
        />
        <path
          fill={color}
          d="M3 6c0 1.306.835 2.417 2 2.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 1 0 3 6m16.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="M19.5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
        />
        <path
          fill={color}
          d="M18 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path fill={color} d="M18 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      </svg>
    );
  },
);

export default ProGitPrDraftFill;
