import * as React from "react";
import { IconProps } from "./types";

export const ProRobot3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        <path
          fill={color}
          d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M11 2v2H8a5 5 0 0 0-5 5v12l1 1h16l1-1V9a5 5 0 0 0-5-5h-3V2zM5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v11H5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProRobot3Line;
