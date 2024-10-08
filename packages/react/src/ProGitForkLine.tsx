import * as React from "react";
import { IconProps } from "./types";

export const ProGitForkLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3 3 0 0 1 3 6m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m11 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
        <path
          fill={color}
          d="M3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3 3 0 0 1 3 6m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m11 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
        <path
          fill={color}
          d="M3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3 3 0 0 1 3 6m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m11 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </svg>
    );
  },
);

export default ProGitForkLine;
