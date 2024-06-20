import * as React from "react";
import { IconProps } from "./types";

export const ProClockwiseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 9.5V8a3 3 0 0 0-3-3h-4V3h4a5 5 0 0 1 5 5v1.5h2.5l.707 1.707-3.5 3.5h-1.414l-3.5-3.5L15.5 9.5zM14 20l-1 1H3l-1-1V10l1-1h10l1 1z"
        />
      </svg>
    );
  },
);

export default ProClockwiseFill;
