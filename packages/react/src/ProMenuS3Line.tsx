import * as React from "react";
import { IconProps } from "./types";

export const ProMenuS3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 7h10v2H7zm0 8h10v2H7zm12-4H5v2h14z" />
      </svg>
    );
  },
);

export default ProMenuS3Line;
