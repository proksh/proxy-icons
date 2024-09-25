import * as React from "react";
import { IconProps } from "./types";

export const ProFolderSearchFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        <path
          fill={color}
          d="M2 3v18h20V5h-9.586l-2-2zm5 9a4 4 0 1 1 7.446 2.032l2.261 2.26-1.414 1.415-2.261-2.26A4 4 0 0 1 7 12"
        />
      </svg>
    );
  },
);

export default ProFolderSearchFill;
