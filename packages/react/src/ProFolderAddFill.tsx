import * as React from "react";
import { IconProps } from "./types";

export const ProFolderAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm11 6v3h3v2h-3v3h-2v-3H8v-2h3V9z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFolderAddFill;
