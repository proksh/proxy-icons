import * as React from "react";
import { IconProps } from "./types";

export const ProLayout6Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3v18H2V3zm-6 16h4v-9h-4zm-2-9H4v9h10zM4 8h16V5H4z"
        />
      </svg>
    );
  },
);

export default ProLayout6Line;
