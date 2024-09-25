import * as React from "react";
import { IconProps } from "./types";

export const ProComputerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v13l1 1h8v2H7v2h10v-2h-4v-2h8l1-1V4l-1-1z"
        />
      </svg>
    );
  },
);

export default ProComputerFill;
