import * as React from "react";
import { IconProps } from "./types";

export const ProAlignCenterFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 7.5H3v-3h18zm0 12H3v-3h18zm-16-6h14v-3H5z" />
      </svg>
    );
  },
);

export default ProAlignCenterFill;
