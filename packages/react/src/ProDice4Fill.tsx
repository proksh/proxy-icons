import * as React from "react";
import { IconProps } from "./types";

export const ProDice4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm7.5 5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M16.5 9a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
      </svg>
    );
  },
);

export default ProDice4Fill;
