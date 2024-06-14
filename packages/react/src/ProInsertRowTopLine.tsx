import * as React from "react";
import { IconProps } from "./types";

export const ProInsertRowTopLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 10V8H9V6h2V4h2v2h2v2h-2v2z" />
        <path
          fill={color}
          d="M12 1a6 6 0 1 0 0 12 6 6 0 0 0 0-12M8 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m13 15v-8H3v8zM5 20v-4h14v4z"
        />
      </svg>
    );
  },
);

export default ProInsertRowTopLine;
