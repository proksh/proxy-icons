import * as React from "react";
import { IconProps } from "./types";

export const ProPassValidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 13.5a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM5 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7.5 6.414 4.707-4.707-1.414-1.414-3.293 3.293-1.793-1.793-1.414 1.414z"
        />
        <path fill={color} d="M23 4H1v16h22zM3 18V6h18v12z" />
      </svg>
    );
  },
);

export default ProPassValidLine;
