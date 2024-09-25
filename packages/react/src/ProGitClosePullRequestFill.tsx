import * as React from "react";
import { IconProps } from "./types";

export const ProGitClosePullRequestFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M14.793 4.207 16.586 6l-1.793 1.793 1.414 1.414L18 7.414l1.793 1.793 1.414-1.414L19.414 6l1.793-1.793-1.414-1.414L18 4.586l-1.793-1.793z"
      />
      <path
        fill={color}
        d="M14.793 4.207 16.586 6l-1.793 1.793 1.414 1.414L18 7.414l1.793 1.793 1.414-1.414L19.414 6l1.793-1.793-1.414-1.414L18 4.586l-1.793-1.793z"
      />
      <path
        fill={color}
        d="M14.793 4.207 16.586 6l-1.793 1.793 1.414 1.414L18 7.414l1.793 1.793 1.414-1.414L19.414 6l1.793-1.793-1.414-1.414L18 4.586l-1.793-1.793zM3 6c0 1.306.835 2.417 2 2.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 1 0 3 6"
      />
      <path
        fill={color}
        d="M3 6c0 1.306.835 2.417 2 2.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 1 0 3 6"
      />
      <path
        fill={color}
        d="M3 6c0 1.306.835 2.417 2 2.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 1 0 3 6m16 9.17V10h-2v5.17a3.001 3.001 0 1 0 2 0"
      />
      <path fill={color} d="M19 15.17V10h-2v5.17a3.001 3.001 0 1 0 2 0" />
      <path fill={color} d="M19 15.17V10h-2v5.17a3.001 3.001 0 1 0 2 0" />
    </svg>
  );
});

export default ProGitClosePullRequestFill;
