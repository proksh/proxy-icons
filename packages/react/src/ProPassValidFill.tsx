import * as React from "react";
import { IconProps } from "./types";

export const ProPassValidFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
        <path
          fill={color}
          d="M1 4h22v16H1zm7 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 6.5a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm13.207-2.793-1.414-1.414-3.293 3.293-1.793-1.793-1.414 1.414 3.207 3.207z"
        />
      </svg>
    );
  },
);

export default ProPassValidFill;
