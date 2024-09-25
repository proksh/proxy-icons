import * as React from "react";
import { IconProps } from "./types";

export const ProBook3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h15v2H7a2 2 0 1 0 0 4h14v14z"
        />
        <path fill={color} d="M7 5a1 1 0 0 0 0 2h14V5z" />
      </svg>
    );
  },
);

export default ProBook3Fill;
