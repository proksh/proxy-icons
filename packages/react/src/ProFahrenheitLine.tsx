import * as React from "react";
import { IconProps } from "./types";

export const ProFahrenheitLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M4.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M10 4h11v2h-9v6h7v2h-7v7h-2z"
        />
      </svg>
    );
  },
);

export default ProFahrenheitLine;
