import * as React from "react";
import { IconProps } from "./types";

export const ProToggleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
        <path
          fill={color}
          d="M1 12a7 7 0 0 1 7-7h8a7 7 0 1 1 0 14H8a7 7 0 0 1-7-7m7-5a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10z"
        />
      </svg>
    );
  },
);

export default ProToggleLine;
