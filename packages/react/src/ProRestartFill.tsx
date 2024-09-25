import * as React from "react";
import { IconProps } from "./types";

export const ProRestartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-15a5 5 0 1 0 2.001 9.584l.801 1.832a7 7 0 1 1 2.018-1.34L14 12h3a5 5 0 0 0-5-5"
        />
      </svg>
    );
  },
);

export default ProRestartFill;
