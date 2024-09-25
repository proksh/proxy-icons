import * as React from "react";
import { IconProps } from "./types";

export const ProWindyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 4c-.642 0-1.192.404-1.406.974l-1.873-.701A3.5 3.5 0 1 1 13.5 9H5a1 1 0 0 0 0 2h13.5a3.5 3.5 0 1 1-3.279 4.727l1.873-.701A1.501 1.501 0 1 0 18.5 13H5a3 3 0 1 1 0-6h8.5a1.5 1.5 0 0 0 0-3M4 15h6.5a3.5 3.5 0 1 1-3.279 4.727l1.873-.701A1.501 1.501 0 1 0 10.5 17H4z"
        />
      </svg>
    );
  },
);

export default ProWindyLine;
