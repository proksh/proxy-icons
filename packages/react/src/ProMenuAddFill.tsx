import * as React from "react";
import { IconProps } from "./types";

export const ProMenuAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M21 7.5H3v-3h18zm-10 12H3v-3h8zm-8-6h18v-3H3zm12.5 3V14h3v2.5H21v3h-2.5V22h-3v-2.5H13v-3z"
        />
      </svg>
    );
  },
);

export default ProMenuAddFill;
