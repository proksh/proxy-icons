import * as React from "react";
import { IconProps } from "./types";

export const ProDice6Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm2 1v14h14V5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDice6Line;
