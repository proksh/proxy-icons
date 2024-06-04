import * as React from "react";
import { IconProps } from "./types";

export const ProMicrosoftLoopFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 12c0 5.523-4.477 10-10 10H6.665A7.99 7.99 0 0 0 10 15.5h2A3.5 3.5 0 1 0 8.5 12v3.5A6.5 6.5 0 0 1 2 22V12C2 6.477 6.477 2 12 2s10 4.477 10 10"
        />
      </svg>
    );
  },
);

export default ProMicrosoftLoopFill;
