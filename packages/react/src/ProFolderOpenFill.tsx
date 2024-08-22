import * as React from "react";
import { IconProps } from "./types";

export const ProFolderOpenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H21v4H4v7.875L5.469 11h17.006l-2.71 10H2z"
        />
      </svg>
    );
  },
);

export default ProFolderOpenFill;
