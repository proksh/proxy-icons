import * as React from "react";
import { IconProps } from "./types";

export const ProMouseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 6v5h2V6z" />
        <path
          fill={color}
          d="M10 2a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zM6 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z"
        />
      </svg>
    );
  },
);

export default ProMouseLine;
