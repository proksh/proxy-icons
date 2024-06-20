import * as React from "react";
import { IconProps } from "./types";

export const ProFocus2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <path
          fill={color}
          d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        />
        <path
          fill={color}
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
        />
      </svg>
    );
  },
);

export default ProFocus2Line;
