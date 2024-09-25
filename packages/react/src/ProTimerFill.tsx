import * as React from "react";
import { IconProps } from "./types";

export const ProTimerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 1H8v2h8zM3 13a9 9 0 0 1 14.89-6.805l1.903-1.902 1.414 1.414-1.958 1.958A9 9 0 1 1 3 13m8-4v5h2V9z"
        />
      </svg>
    );
  },
);

export default ProTimerFill;
