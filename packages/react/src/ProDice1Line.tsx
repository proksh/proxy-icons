import * as React from "react";
import { IconProps } from "./types";

export const ProDice1Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          fillOpacity=".961"
        />
        <path
          fill={color}
          d="M4 3 3 4v16l1 1h16l1-1V4l-1-1zm1 16V5h14v14z"
          fillOpacity=".961"
        />
      </svg>
    );
  },
);

export default ProDice1Line;
