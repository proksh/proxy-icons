import * as React from "react";
import { IconProps } from "./types";

export const ProFolderSearchLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M7 12a4 4 0 1 1 7.446 2.032l2.261 2.26-1.414 1.415-2.261-2.26A4 4 0 0 1 7 12m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
        <path
          fill={color}
          d="M2 3h8.414l2 2H22v16H2zm2 2v14h16V7h-8.414l-2-2z"
        />
      </svg>
    );
  },
);

export default ProFolderSearchLine;
