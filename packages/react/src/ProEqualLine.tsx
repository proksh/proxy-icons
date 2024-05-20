import * as React from "react";
import { IconProps } from "./types";

export const ProEqualLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 8H5v2h14zm0 6H5v2h14z" />
      </svg>
    );
  },
);

export default ProEqualLine;
