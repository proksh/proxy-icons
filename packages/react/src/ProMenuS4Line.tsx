import * as React from "react";
import { IconProps } from "./types";

export const ProMenuS4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 7h10v2H9zm-4 8h10v2H5zm14-4H5v2h14z" />
      </svg>
    );
  },
);

export default ProMenuS4Line;
