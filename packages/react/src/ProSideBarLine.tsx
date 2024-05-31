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
        <path fill={color} d="M22 3H2v18h20zM4 19V5h4v14zm6 0V5h10v14z" />
      </svg>
    );
  },
);

export default ProSideBarLine;
