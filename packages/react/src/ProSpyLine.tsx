import * as React from "react";
import { IconProps } from "./types";

export const ProSpyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0m14-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M2 10h20v2H2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="m4 4 1-1h14l1 1v6.5h-2V5H6v6H4zm10 13h-4v-2h4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSpyLine;
