import * as React from "react";
import { IconProps } from "./types";

export const ProAtFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path
          fill={color}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-16a6 6 0 1 0 3.092 11.144l1.032 1.713A8 8 0 1 1 20 12v1a3 3 0 0 1-5.288 1.94A4 4 0 1 1 14.646 9H16v4a1 1 0 1 0 2 0v-1a6 6 0 0 0-6-6"
        />
      </svg>
    );
  },
);

export default ProAtFill;
