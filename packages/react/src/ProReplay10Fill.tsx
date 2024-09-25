import * as React from "react";
import { IconProps } from "./types";

export const ProReplay10Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.886 4.972-1.179-1.18L2 4.5v5h5l.707-1.707L6.3 6.386A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.97 9.97 0 0 0-7.114 2.972"
        />
        <path
          fill={color}
          d="m11.25 9 .75-.75h3l.75.75v6l-.75.75h-3l-.75-.75zm1.5 5.25h1.5v-4.5h-1.5zm-2.5-6h-1.5v7.5h1.5z"
        />
      </svg>
    );
  },
);

export default ProReplay10Fill;
