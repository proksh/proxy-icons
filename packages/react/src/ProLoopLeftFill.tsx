import * as React from "react";
import { IconProps } from "./types";

export const ProLoopLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.819 5.904.035-.03A8 8 0 0 1 20 12h2a9.97 9.97 0 0 0-3.64-7.716A9.97 9.97 0 0 0 12 2c-2.53 0-4.839.939-6.6 2.487L3.708 2.793 2 3.5v6h6l.707-1.707zM4 12a8 8 0 0 0 13.182 6.096l-1.889-1.889L16 14.5h6v6l-1.707.707-1.694-1.694q-.413.363-.863.68A9.95 9.95 0 0 1 12 22a9.97 9.97 0 0 1-7.716-3.64A9.97 9.97 0 0 1 2 12z"
        />
      </svg>
    );
  },
);

export default ProLoopLeftFill;
