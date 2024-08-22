import * as React from "react";
import { IconProps } from "./types";

export const ProDice3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="M4 3 3 4v16l1 1h16l1-1V4l-1-1zm1 16V5h14v14z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDice3Line;
