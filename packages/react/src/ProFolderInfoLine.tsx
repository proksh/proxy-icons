import * as React from "react";
import { IconProps } from "./types";

export const ProFolderInfoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 12v5h-2v-5zm0-1V9h-2v2z" />
        <path
          fill={color}
          d="M2 3h8.414l2 2H22v16H2zm2 2v14h16V7h-8.414l-2-2z"
        />
      </svg>
    );
  },
);

export default ProFolderInfoLine;
