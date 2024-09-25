import * as React from "react";
import { IconProps } from "./types";

export const ProMenuSearchFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 3a5 5 0 1 0 2.392 9.392l2.194 2.194L22 13.172l-2.075-2.075A5 5 0 0 0 16 3M3 7.5h6v-3H3zm18 12H3v-3h18zm-18-6h6v-3H3z"
        />
      </svg>
    );
  },
);

export default ProMenuSearchFill;
