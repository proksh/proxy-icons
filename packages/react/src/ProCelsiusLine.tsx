import * as React from "react";
import { IconProps } from "./types";

export const ProCelsiusLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M3 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M16 4a6 6 0 0 0-6 6v5a6 6 0 0 0 12 0h-2a4 4 0 0 1-8 0v-5a4 4 0 0 1 8 0h2a6 6 0 0 0-6-6"
        />
      </svg>
    );
  },
);

export default ProCelsiusLine;
