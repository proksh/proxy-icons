import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutTop2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M18 7H6v2h12z" />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default ProLayoutTop2Line;
