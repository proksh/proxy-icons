import * as React from "react";
import { IconProps } from "./types";

export const ProRobotLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="M13 3.5h1v-3h-4v3h1V5H5L4 6v14l1 1h14l1-1V6l-1-1h-6zM6 19V7h12v12z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M21.5 10h2v6h-2zm-21 0v6h2v-6z" />
      </svg>
    );
  },
);

export default ProRobotLine;
