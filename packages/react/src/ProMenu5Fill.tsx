import * as React from "react";
import { IconProps } from "./types";

export const ProMenu5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 6.5H3v-3h18zm0 14H3v-3h18zm-12-7h12v-3H9z" />
      </svg>
    );
  },
);

export default ProMenu5Fill;
