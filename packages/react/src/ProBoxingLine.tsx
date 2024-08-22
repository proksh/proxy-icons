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
          d="M7 2a4 4 0 0 0-4 4v11a3 3 0 0 0 1 2.236V21l1 1h14l1-1v-1.764c.614-.55 1-1.348 1-2.236v-4.764c.614-.55 1-1.348 1-2.236V8a6 6 0 0 0-6-6zM5 17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4h-6.035A3.5 3.5 0 0 1 9.5 16H6v-2h3.5a1.5 1.5 0 0 0 0-3H5zm0-8h4.5a3.5 3.5 0 0 1 3.163 2H19a1 1 0 0 0 1-1V8a4 4 0 0 0-4-4H7a2 2 0 0 0-2 2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBoxingLine;
