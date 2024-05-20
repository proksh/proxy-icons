import * as React from "react";
import { IconProps } from "./types";

export const ProMenuSLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 7h14v2H5zm0 8h14v2H5zm14-4H5v2h14z" />
      </svg>
    );
  },
);

export default ProMenuSLine;
