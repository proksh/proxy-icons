import * as React from "react";
import { IconProps } from "./types";

export const ProTimerFlashFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 1H8v2h8zm-4 3a8.97 8.97 0 0 0-5.89 2.195L4.207 4.293 2.793 5.707l1.958 1.958a9 9 0 1 0 14.498 0l1.958-1.958-1.414-1.414-1.902 1.902A8.97 8.97 0 0 0 12 4M8 14l5-6.5V12h3l-5 6.5V14z"
        />
      </svg>
    );
  },
);

export default ProTimerFlashFill;
