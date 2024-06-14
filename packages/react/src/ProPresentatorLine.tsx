import * as React from "react";
import { IconProps } from "./types";

export const ProPresentatorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M3 8l1-1h9.5v2H9v13H7v-6H5v6H3zm2 1v5h2V9z"
        />
        <path
          fill={color}
          d="M14.382 16H10v-2h9V5h-9V3h10l1 1v11l-1 1h-3.382l3 6h-2.236z"
        />
      </svg>
    );
  },
);

export default ProPresentatorLine;
