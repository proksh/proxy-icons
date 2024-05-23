import * as React from "react";
import { IconProps } from "./types";

export const ProMenu4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 6.5H9v-3h12zm-18 14v-3h12v3zm0-7h18v-3H3z" />
      </svg>
    );
  },
);

export default ProMenu4Fill;
