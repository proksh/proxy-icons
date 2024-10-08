import * as React from "react";
import { IconProps } from "./types";

export const ProGitPullRequestFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.732 2.36 15.5 3v2H18l1 1v9.17a3.001 3.001 0 1 1-2 0V7h-1.5v2l-1.768.64L10.698 6z"
        />
        <path
          fill={color}
          d="M13.732 2.36 15.5 3v2H18l1 1v9.17a3.001 3.001 0 1 1-2 0V7h-1.5v2l-1.768.64L10.698 6z"
        />
        <path
          fill={color}
          d="M13.732 2.36 15.5 3v2H18l1 1v9.17a3.001 3.001 0 1 1-2 0V7h-1.5v2l-1.768.64L10.698 6zM5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0z"
        />
        <path
          fill={color}
          d="M5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0z"
        />
        <path
          fill={color}
          d="M5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0z"
        />
      </svg>
    );
  },
);

export default ProGitPullRequestFill;
