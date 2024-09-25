import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.004 6.004 1-1h10l.707 1.707-4.292 4.293 6.284 6.285-1.414 1.414-6.285-6.285-4.293 4.293-1.707-.707z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftUpFill;
