import * as React from "react";
import { IconProps } from "./types";

export const ProFolderForbidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v6h-2V7h-8.414l-2-2H4v14h8v2H2z"
        />
        <path
          fill={color}
          d="M13 17a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 0 0-2.708 4.294l4.002-4.002A3 3 0 0 0 18 14m2.708 1.707-4.001 4a3 3 0 0 0 4.001-4.001"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolderForbidLine;
