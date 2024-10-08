import * as React from "react";
import { IconProps } from "./types";

export const ProUserForbidFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M8 14a5 5 0 0 0-5 5v3h9.876a6.47 6.47 0 0 1-1.376-4c0-1.509.514-2.897 1.376-4zm5 4a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 0 0-2.708 4.293l4.001-4A3 3 0 0 0 18 15m0 6a3 3 0 0 0 2.708-4.293l-4.001 4c.391.188.83.293 1.293.293"
        />
      </svg>
    );
  },
);

export default ProUserForbidFill;
