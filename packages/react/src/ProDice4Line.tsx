import * as React from "react";
import { IconProps } from "./types";

export const ProDice4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path fill={color} d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm2 1v14h14V5z" />
      </svg>
    );
  },
);

export default ProDice4Line;
