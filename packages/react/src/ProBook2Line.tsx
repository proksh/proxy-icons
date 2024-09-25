import * as React from "react";
import { IconProps } from "./types";

export const ProBook2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 9h8V7H8z" />
        <path
          fill={color}
          d="M3 5a3 3 0 0 1 3-3h15v20H6a3 3 0 0 1-3-3zm16-1H6a1 1 0 0 0-1 1v11.17c.313-.11.65-.17 1-.17h13zM6 20h13v-2H6a1 1 0 1 0 0 2"
        />
      </svg>
    );
  },
);

export default ProBook2Line;
