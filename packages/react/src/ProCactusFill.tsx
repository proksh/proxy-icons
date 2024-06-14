import * as React from "react";
import { IconProps } from "./types";

export const ProCactusFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 6a4 4 0 1 1 8 0v9h1a1 1 0 0 0 1-1V7h2v7a3 3 0 0 1-3 3h-1v3h2v2H6v-2h2v-5H7a3 3 0 0 1-3-3V9h2v3a1 1 0 0 0 1 1h1z"
        />
      </svg>
    );
  },
);

export default ProCactusFill;
