import * as React from "react";
import { IconProps } from "./types";

export const ProReplay15Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.384 7.5A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.98 9.98 0 0 0-8 4V3.5H2v6h6v-2z"
        />
        <path
          fill={color}
          d="M11.25 8.75H16v1.5h-3.25v1h1.5a2 2 0 1 1 0 4H11v-1.5h3.25a.5.5 0 0 0 0-1h-3zm-1 0h-1.5v6.5h1.5z"
        />
      </svg>
    );
  },
);

export default ProReplay15Line;
