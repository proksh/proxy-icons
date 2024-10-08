import * as React from "react";
import { IconProps } from "./types";

export const ProTimeHistoryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.4 4.487 3.708 2.793 2 3.5v5l1 1h5l.707-1.707L6.82 5.904A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2c-2.53 0-4.839.94-6.6 2.487"
        />
        <path
          fill={color}
          d="m11 12.414 3.793 3.793 1.414-1.414L13 11.586V7h-2z"
        />
      </svg>
    );
  },
);

export default ProTimeHistoryFill;
