import * as React from "react";
import { IconProps } from "./types";

export const ProForward10Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.616 7.5A8 8 0 1 0 20 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.98 9.98 0 0 1 8 4V3.5h2v6h-6v-2z"
        />
        <path
          fill={color}
          d="m11.25 9 .75-.75h3l.75.75v6l-.75.75h-3l-.75-.75zm1.5 5.25h1.5v-4.5h-1.5zm-2.5-6h-1.5v7.5h1.5z"
        />
      </svg>
    );
  },
);

export default ProForward10Line;
