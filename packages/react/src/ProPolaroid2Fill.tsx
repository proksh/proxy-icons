import * as React from "react";
import { IconProps } from "./types";

export const ProPolaroid2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v13H3zm3 4h2V6H6zm6-2a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 19v1l1 1h16l1-1v-1z"
        />
      </svg>
    );
  },
);

export default ProPolaroid2Fill;
