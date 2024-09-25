import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBag3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 12a5 5 0 0 0 10 0v-2h-2v2a3 3 0 1 1-6 0v-2H7z"
        />
        <path
          fill={color}
          d="M18.054 2 21 6.713V22H3V6.713L5.946 2zm.142 4-1.25-2H7.054l-1.25 2zM5 8v12h14V8z"
        />
      </svg>
    );
  },
);

export default ProShoppingBag3Line;
