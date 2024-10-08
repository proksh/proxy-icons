import * as React from "react";
import { IconProps } from "./types";

export const ProGitCommitLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.126 13H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2h-5.126a4.002 4.002 0 0 1-7.748 0M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
        />
      </svg>
    );
  },
);

export default ProGitCommitLine;
