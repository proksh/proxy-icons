import * as React from "react";
import { IconProps } from "./types";

export const ProMenu3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M18 6H6V4h12zm0 14H6v-2h12zM3 13h18v-2H3z" />
      </svg>
    );
  },
);

export default ProMenu3Line;
