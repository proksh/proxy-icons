import * as React from "react";
import { IconProps } from "./types";

export const ProCheckboxBlankFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4 3 3 4v16l1 1h16l1-1V4l-1-1z" />
      </svg>
    );
  },
);

export default ProCheckboxBlankFill;
