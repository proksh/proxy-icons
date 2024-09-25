import * as React from "react";
import { IconProps } from "./types";

export const ProPolaroidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v16l1 1h16l1-1v-2.5h-2V19H5V5h14v2h2V4l-1-1z"
        />
        <path fill={color} d="M6 6v3h2V6zm9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        <path
          fill={color}
          d="M10 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        />
      </svg>
    );
  },
);

export default ProPolaroidLine;
