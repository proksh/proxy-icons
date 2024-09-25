import * as React from "react";
import { IconProps } from "./types";

export const ProLayout4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h18v18H3zm2 10v6h6v-6zm6-2V5H5v6zm2 8h6V5h-6z"
        />
      </svg>
    );
  },
);

export default ProLayout4Line;
