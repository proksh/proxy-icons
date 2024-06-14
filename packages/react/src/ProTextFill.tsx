import * as React from "react";
import { IconProps } from "./types";

export const ProTextFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13.5 6.5H19v-3H5v3h5.5V21h3z" />
      </svg>
    );
  },
);

export default ProTextFill;
