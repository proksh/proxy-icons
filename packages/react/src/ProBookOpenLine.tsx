import * as React from "react";
import { IconProps } from "./types";

export const ProBookOpenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4v16l1 1h8v2h2v-2h8l1-1V4l-1-1h-6a4 4 0 0 0-3 1.354A4 4 0 0 0 9 3H3zm7 1a2 2 0 0 1 2 2v12H4V5zm11 14h-7V7a2 2 0 0 1 2-2h5z"
        />
      </svg>
    );
  },
);

export default ProBookOpenLine;
