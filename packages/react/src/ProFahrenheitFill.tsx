import * as React from "react";
import { IconProps } from "./types";

export const ProFahrenheitFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5-2H21v3h-8.5v5H19v3h-6.5V21h-3z"
        />
      </svg>
    );
  },
);

export default ProFahrenheitFill;
