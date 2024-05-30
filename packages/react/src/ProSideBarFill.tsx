import * as React from "react";
import { IconProps } from "./types";

export const ProSideBarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} stroke={color} d="M9 20V4H3v16z" strokeWidth="2" />
        <path stroke={color} d="M3 4h18v16H3z" strokeWidth="2" />
      </svg>
    );
  },
);

export default ProSideBarFill;
