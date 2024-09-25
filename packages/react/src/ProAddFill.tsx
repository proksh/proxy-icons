import * as React from "react";
import { IconProps } from "./types";

export const ProAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10.5 13.5V19h3v-5.5H19v-3h-5.5V5h-3v5.5H5v3z" />
      </svg>
    );
  },
);

export default ProAddFill;
