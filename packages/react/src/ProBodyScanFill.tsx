import * as React from "react";
import { IconProps } from "./types";

export const ProBodyScanFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 2h6v2H4v4H2zm10 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        />
        <path
          fill={color}
          d="M7.5 7a4.5 4.5 0 0 0 9 0h2a6.5 6.5 0 0 1-3.5 5.768V19H9v-6.232A6.5 6.5 0 0 1 5.5 7zM8 22H2v-6h2v4h4zM22 2h-6v2h4v4h2zm-6 20h6v-6h-2v4h-4z"
        />
      </svg>
    );
  },
);

export default ProBodyScanFill;
