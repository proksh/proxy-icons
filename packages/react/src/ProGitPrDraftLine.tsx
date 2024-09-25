import * as React from "react";
import { IconProps } from "./types";

export const ProGitPrDraftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 6a3 3 0 1 1 4 2.83v6.34a3.001 3.001 0 1 1-2 0V8.83A3 3 0 0 1 3 6m2 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
        <path
          fill={color}
          d="M3 6a3 3 0 1 1 4 2.83v6.34a3.001 3.001 0 1 1-2 0V8.83A3 3 0 0 1 3 6m2 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m13-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="M18 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        />
        <path
          fill={color}
          d="M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path fill={color} d="M18 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      </svg>
    );
  },
);

export default ProGitPrDraftLine;
