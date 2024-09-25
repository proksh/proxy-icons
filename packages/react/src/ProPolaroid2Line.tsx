import * as React from "react";
import { IconProps } from "./types";

export const ProPolaroid2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 8h2V6H6z"
        />
        <path
          fill={color}
          d="M4 3 3 4v16l1 1h16l1-1V4l-1-1zm15 2v10H5V5zM5 17h14v2H5z"
        />
      </svg>
    );
  },
);

export default ProPolaroid2Line;
