import * as React from "react";
import { IconProps } from "./types";

export const ProForward15Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m19.114 4.972 1.179-1.18L22 4.5v5h-5l-.707-1.707L17.7 6.386A8 8 0 1 0 20 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.97 9.97 0 0 1 7.114 2.972"
        />
        <path
          fill={color}
          d="M11.25 8.75H16v1.5h-3.25v1h1.5a2 2 0 1 1 0 4H11v-1.5h3.25a.5.5 0 0 0 0-1h-3zm-1 0h-1.5v6.5h1.5z"
        />
      </svg>
    );
  },
);

export default ProForward15Fill;
