import * as React from "react";
import { IconProps } from "./types";

export const ProFocus3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="M11 23v-3.062A8.004 8.004 0 0 1 4.062 13H1v-2h3.062A8.004 8.004 0 0 1 11 4.062V1h2v3.062A8.004 8.004 0 0 1 19.938 11H23v2h-3.062A8.004 8.004 0 0 1 13 19.938V23zm1-17a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
        />
      </svg>
    );
  },
);

export default ProFocus3Line;
