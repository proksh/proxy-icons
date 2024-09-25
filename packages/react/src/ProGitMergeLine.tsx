import * as React from "react";
import { IconProps } from "./types";

export const ProGitMergeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 8.83a3.001 3.001 0 1 1 2.105-.04A3 3 0 0 0 10 11h4a5 5 0 0 1 4.927 4.146A3.001 3.001 0 0 1 18 21a3 3 0 0 1-1.105-5.79A3 3 0 0 0 14 13h-4a4.98 4.98 0 0 1-3-1v3.17a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
        <path
          fill={color}
          d="M5 8.83a3.001 3.001 0 1 1 2.105-.04A3 3 0 0 0 10 11h4a5 5 0 0 1 4.927 4.146A3.001 3.001 0 0 1 18 21a3 3 0 0 1-1.105-5.79A3 3 0 0 0 14 13h-4a4.98 4.98 0 0 1-3-1v3.17a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
        <path
          fill={color}
          d="M5 8.83a3.001 3.001 0 1 1 2.105-.04A3 3 0 0 0 10 11h4a5 5 0 0 1 4.927 4.146A3.001 3.001 0 0 1 18 21a3 3 0 0 1-1.105-5.79A3 3 0 0 0 14 13h-4a4.98 4.98 0 0 1-3-1v3.17a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
      </svg>
    );
  },
);

export default ProGitMergeLine;
