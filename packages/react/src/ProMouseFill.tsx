import * as React from "react";
import { IconProps } from "./types";

export const ProMouseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 8a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6zm7-2v5h2V6z"
        />
      </svg>
    );
  },
);

export default ProMouseFill;
