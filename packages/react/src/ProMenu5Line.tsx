import * as React from "react";
import { IconProps } from "./types";

export const ProMenu5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 6H3V4h18zm0 14H3v-2h18zM9 13h12v-2H9z" />
      </svg>
    );
  },
);

export default ProMenu5Line;
