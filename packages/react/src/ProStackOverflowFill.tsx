import * as React from "react";
import { IconProps } from "./types";

export const ProStackOverflowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.001 20.003v-5.334h2v7.334h-16v-7.334h2v5.334zM7.6 14.736l.313-1.98 8.837 1.7-.113 1.586zm1.2-4.532.732-1.6 7.998 3.733-.733 1.6zm2.265-3.932 1.133-1.333 6.798 5.665-1.133 1.333zm4.332-4.132 5.265 7.064-1.4 1.067-5.264-7.065zM7.333 18.668v-2h9.33v2z"
        />
      </svg>
    );
  },
);

export default ProStackOverflowFill;
