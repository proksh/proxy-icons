import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutCircleRLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 12a8 8 0 0 1 13.778-5.533l1.444-1.384A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.97 9.97 0 0 0 7.222-3.083l-1.444-1.384A8 8 0 0 1 4 12"
        />
        <path
          fill={color}
          d="M10.5 13h9.086l-2.293 2.293 1.414 1.414L23.414 12l-4.707-4.707-1.414 1.414L19.586 11H10.5z"
        />
      </svg>
    );
  },
);

export default ProLogoutCircleRLine;
