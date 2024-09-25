import * as React from "react";
import { IconProps } from "./types";

export const ProRobot2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="M11 4V2h2v2h6l1 1v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V5l1-1zM6 6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M8 16a5 5 0 0 0-5 5v1h2v-1a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5z"
        />
      </svg>
    );
  },
);

export default ProRobot2Line;
