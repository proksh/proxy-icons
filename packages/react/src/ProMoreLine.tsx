import * as React from "react";
import { IconProps } from "./types";

export const ProMoreLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProMoreLine;
