import * as React from "react";
import { IconProps } from "./types";

export const ProFolderUnknowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm10 7a1.5 1.5 0 0 0-1.5 1.5h-2A3.5 3.5 0 1 1 12 15h-1v-2h1a1.5 1.5 0 0 0 0-3m-1 8v-2h2v2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolderUnknowFill;
