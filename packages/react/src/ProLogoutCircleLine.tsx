import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 12A8 8 0 0 0 6.222 6.467L4.778 5.083A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.97 9.97 0 0 1-7.222-3.083l1.444-1.384A8 8 0 0 0 20 12"
        />
        <path
          fill={color}
          d="M6.707 8.707 4.414 11H13.5v2H4.414l2.293 2.293-1.414 1.414L.586 12l4.707-4.707z"
        />
      </svg>
    );
  },
);

export default ProLogoutCircleLine;
