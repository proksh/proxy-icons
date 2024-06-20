import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutRowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 3H3v18h18zM5 12h14v7H5z" />
      </svg>
    );
  },
);

export default ProLayoutRowFill;
