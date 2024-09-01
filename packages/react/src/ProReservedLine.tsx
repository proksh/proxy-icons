import * as React from "react";
import { IconProps } from "./types";

export const ProReservedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 10h8V8H8z" />
        <path
          fill={color}
          d="M4 3 3 4v10l1 1h7v4H8v2h8v-2h-3v-4h7l1-1V4l-1-1zm1 10V5h14v8z"
        />
      </svg>
    );
  },
);

export default ProReservedLine;
