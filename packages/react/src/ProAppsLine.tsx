import * as React from "react";
import { IconProps } from "./types";

export const ProAppsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M5 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m8 0a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAppsLine;
