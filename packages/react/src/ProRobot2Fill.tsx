import * as React from "react";
import { IconProps } from "./types";

export const ProRobot2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 2v2H5L4 5v5a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5l-1-1h-6V2zm0 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M3 21v1h18v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5" />
      </svg>
    );
  },
);

export default ProRobot2Fill;
