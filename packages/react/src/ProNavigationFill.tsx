import * as React from "react";
import { IconProps } from "./types";

export const ProNavigationFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.168 8.19 3.783 2.535l-1.25 1.25L8.19 22.169l1.871.108 3.733-8.483 8.482-3.732z"
        />
      </svg>
    );
  },
);

export default ProNavigationFill;
