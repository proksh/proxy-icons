import * as React from "react";
import { IconProps } from "./types";

export const ProFileFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8.086 2H21v20H3V7.086z" />
        <path
          fill={color}
          stroke={color}
          d="M10 9V3H8.5L4 7.5V9z"
          strokeLinejoin="bevel"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

export default ProFileFill;
