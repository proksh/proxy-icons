import * as React from "react";
import { IconProps } from "./types";

export const ProMenu4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 6H9V4h12zM3 20v-2h12v2zm0-7h18v-2H3z" />
      </svg>
    );
  },
);

export default ProMenu4Line;
