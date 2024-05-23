import * as React from "react";
import { IconProps } from "./types";

export const ProMenuFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 6.5H3v-3h18zm0 14H3v-3h18zm-18-7h18v-3H3z" />
      </svg>
    );
  },
);

export default ProMenuFill;
