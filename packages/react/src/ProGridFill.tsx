import * as React from "react";
import { IconProps } from "./types";

export const ProGridFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M16 21h5v-5h-5zm-2 0v-5h-4v5zm-6 0v-5H3v5zm-5-7h5v-4H3zm0-6h5V3H3zm7-5v5h4V3zm6 0v5h5V3zm5 7h-5v4h5zm-11 4v-4h4v4z"
        />
      </svg>
    );
  },
);

export default ProGridFill;
