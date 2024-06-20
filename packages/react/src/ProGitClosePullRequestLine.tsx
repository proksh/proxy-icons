import * as React from "react";
import { IconProps } from "./types";

export const ProGitClosePullRequestLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M14.793 4.207 16.586 6l-1.793 1.793 1.414 1.414L18 7.414l1.793 1.793 1.414-1.414L19.414 6l1.793-1.793-1.414-1.414L18 4.586l-1.793-1.793z"
      />
      <path
        fill={color}
        d="M14.793 4.207 16.586 6l-1.793 1.793 1.414 1.414L18 7.414l1.793 1.793 1.414-1.414L19.414 6l1.793-1.793-1.414-1.414L18 4.586l-1.793-1.793z"
      />
      <path
        fill={color}
        d="M14.793 4.207 16.586 6l-1.793 1.793 1.414 1.414L18 7.414l1.793 1.793 1.414-1.414L19.414 6l1.793-1.793-1.414-1.414L18 4.586l-1.793-1.793zM5 8.83v6.34a3.001 3.001 0 1 0 2 0V8.83a3.001 3.001 0 1 0-2 0M6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
      <path
        fill={color}
        d="M5 8.83v6.34a3.001 3.001 0 1 0 2 0V8.83a3.001 3.001 0 1 0-2 0M6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
      <path
        fill={color}
        d="M5 8.83v6.34a3.001 3.001 0 1 0 2 0V8.83a3.001 3.001 0 1 0-2 0M6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m11-3.83V10h2v5.17a3.001 3.001 0 1 1-2 0M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
      <path
        fill={color}
        d="M17 15.17V10h2v5.17a3.001 3.001 0 1 1-2 0M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
      <path
        fill={color}
        d="M17 15.17V10h2v5.17a3.001 3.001 0 1 1-2 0M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
    </svg>
  );
});

export default ProGitClosePullRequestLine;
