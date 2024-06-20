import * as React from "react";
import { IconProps } from "./types";

export const ProBrush4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20.5 4-1-1h-15l-1 1v8H2v7h6v4h8v-4h6v-7h-1.5zm-2 8h-13V5H8v5.5h2V5h8.5zm1.5 2v3h-6v4h-4v-4H4v-3z"
        />
      </svg>
    );
  },
);

export default ProBrush4Line;
