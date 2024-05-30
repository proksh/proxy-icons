import * as React from "react";
import { IconProps } from "./types";

export const ProSideBarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M9 4v16M3 4h18v16H3z" strokeWidth="2" />
      </svg>
    );
  },
);

export default ProSideBarLine;
