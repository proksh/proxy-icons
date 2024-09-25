import * as React from "react";
import { IconProps } from "./types";

export const ProLayout2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 3H3v18h18zm-2 8h-6V5h6zm-8-6v14H5V5zm2 8h6v6h-6z"
        />
      </svg>
    );
  },
);

export default ProLayout2Line;
