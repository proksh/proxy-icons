import * as React from "react";
import { IconProps } from "./types";

export const ProGitRepositoryCommitsFill = React.forwardRef<
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
        d="M6 2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h4.75v-2H6.5a1.5 1.5 0 0 1 0-3h1.382L13 9.952 18.117 16H19v3h-3.75v2H21V2zm1 5V5h2v2zm0 3V8h2v2z"
      />
      <path fill={color} d="m9 17 4-5 4 5h-3v6h-2v-6z" />
    </svg>
  );
});

export default ProGitRepositoryCommitsFill;
