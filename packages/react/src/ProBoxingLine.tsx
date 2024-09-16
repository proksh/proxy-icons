import * as React from "react";
import { IconProps } from "./types";

export const ProBoxingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2a4 4 0 0 0-4 4v11a3 3 0 0 0 1 2.236V21l1 1h14l1-1v-1.764c.614-.55 1-1.348 1-2.236v-4.764c.614-.55 1-1.348 1-2.236V8a6 6 0 0 0-6-6zM5 17v-6h4.5a1.5 1.5 0 0 1 0 3H6v2h3.5a3.5 3.5 0 0 0 3.465-3H19v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1m0-8V6a2 2 0 0 1 2-2h9a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1h-6.337A3.5 3.5 0 0 0 9.5 9z"
        />
      </svg>
    );
  },
);

export default ProBoxingLine;