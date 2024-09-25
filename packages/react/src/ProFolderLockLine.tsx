import * as React from "react";
import { IconProps } from "./types";

export const ProFolderLockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.75 12h.75v4.5h-7V12h.75v-.75a2.75 2.75 0 1 1 5.5 0zm-2 0v-.75a.75.75 0 0 0-1.5 0V12z"
        />
        <path
          fill={color}
          d="M2 3h8.414l2 2H22v16H2zm2 2v14h16V7h-8.414l-2-2z"
        />
      </svg>
    );
  },
);

export default ProFolderLockLine;
