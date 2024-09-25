import * as React from "react";
import { IconProps } from "./types";

export const ProMenu3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M18 6.5H6v-3h12zm0 14H6v-3h12zm-15-7h18v-3H3z" />
      </svg>
    );
  },
);

export default ProMenu3Fill;
