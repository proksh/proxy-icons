import * as React from "react";
import { IconProps } from "./types";

export const ProGitPullRequestLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.293 2.293 1.414 1.414L14.414 5H18l1 1v9.17a3.001 3.001 0 1 1-2 0V7h-2.586l1.293 1.293-1.414 1.414L10.586 6zM17 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
        <path
          fill={color}
          d="m14.293 2.293 1.414 1.414L14.414 5H18l1 1v9.17a3.001 3.001 0 1 1-2 0V7h-2.586l1.293 1.293-1.414 1.414L10.586 6zM17 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
        <path
          fill={color}
          d="m14.293 2.293 1.414 1.414L14.414 5H18l1 1v9.17a3.001 3.001 0 1 1-2 0V7h-2.586l1.293 1.293-1.414 1.414L10.586 6zM17 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
        <path
          fill={color}
          d="M5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
        <path
          fill={color}
          d="M5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        />
      </svg>
    );
  },
);

export default ProGitPullRequestLine;
