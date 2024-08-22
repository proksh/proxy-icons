import * as React from "react";
import { IconProps } from "./types";

export const ProDice5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm5.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDice5Fill;
