import * as React from "react";
import { IconProps } from "./types";

export const ProDice3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm5.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m3.5 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 2a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
      </svg>
    );
  },
);

export default ProDice3Fill;
