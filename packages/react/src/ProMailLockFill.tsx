import * as React from "react";
import { IconProps } from "./types";

export const ProMailLockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v1.01l-10 7.726L2 4.01z" />
        <path
          fill={color}
          d="M2 6.536V21h11v-6h1.1a5.002 5.002 0 0 1 7.9-3V6.537l-10 7.727z"
        />
        <path
          fill={color}
          d="M23 17v5h-8v-5h1v-1a3 3 0 1 1 6 0v1zm-3 0v-1a1 1 0 1 0-2 0v1z"
        />
      </svg>
    );
  },
);

export default ProMailLockFill;
