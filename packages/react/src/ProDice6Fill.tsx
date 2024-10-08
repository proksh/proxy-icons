import * as React from "react";
import { IconProps } from "./types";

export const ProDice6Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm7.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M10.5 16a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M9 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7.5-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
      </svg>
    );
  },
);

export default ProDice6Fill;
