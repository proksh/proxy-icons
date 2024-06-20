import * as React from "react";
import { IconProps } from "./types";

export const ProCommandLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 5a1.5 1.5 0 1 0 0 3H8V6.5A1.5 1.5 0 0 0 6.5 5M10 8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 1 1 10 6.5zm0 2v4h4v-4zm6-2h1.5A1.5 1.5 0 1 0 16 6.5zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5zm-8 0H6.5A1.5 1.5 0 1 0 8 17.5z"
        />
      </svg>
    );
  },
);

export default ProCommandLine;
