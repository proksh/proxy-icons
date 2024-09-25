import * as React from "react";
import { IconProps } from "./types";

export const ProLayout3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h18v18H3zm7 16h9v-9h-9zm-2-9H5v9h3zm11-5H5v3h14z"
        />
      </svg>
    );
  },
);

export default ProLayout3Line;
