import * as React from "react";
import { IconProps } from "./types";

export const ProRssFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 21H3v-4a4 4 0 0 1 4 4m-4-8a8 8 0 0 1 8 8h3c0-6.075-4.925-11-11-11z"
        />
        <path
          fill={color}
          d="M3 6c8.284 0 15 6.716 15 15h3c0-9.941-8.059-18-18-18z"
        />
      </svg>
    );
  },
);

export default ProRssFill;
