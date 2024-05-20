import * as React from "react";
import { IconProps } from "./types";

export const ProFlagLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h9.118l1 2H21v13h-8.118l-1-2H5v6H3zm2 10h8.118l1 2H19V7h-6.118l-1-2H5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFlagLine;
