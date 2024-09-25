import * as React from "react";
import { IconProps } from "./types";

export const ProWebcamLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
        <path
          fill={color}
          d="M5 8a7 7 0 0 1 14 0v5a7 7 0 1 1-14 0zm7-5a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5M7 21v2h10v-2z"
        />
      </svg>
    );
  },
);

export default ProWebcamLine;
