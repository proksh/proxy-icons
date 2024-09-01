import * as React from "react";
import { IconProps } from "./types";

export const ProFolderCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.914 3H1.5v18h13.965l-2.733-2.732 3.536-3.536 2.232 2.233 3-3V5h-9.586z"
        />
        <path
          fill={color}
          d="m18.5 21.914 5.207-5.207-1.414-1.414-3.793 3.793-2.293-2.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProFolderCheckFill;
