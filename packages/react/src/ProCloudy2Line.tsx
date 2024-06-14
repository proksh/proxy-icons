import * as React from "react";
import { IconProps } from "./types";

export const ProCloudy2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.536 8.18A7.818 7.818 0 1 0 8.818 20h8.637a5.545 5.545 0 0 0 5.54-5.768Q23 14.117 23 14a6 6 0 0 0-7.464-5.82M8.818 6.364a5.82 5.82 0 0 1 5.313 3.442l.401.896.903-.385a4 4 0 0 1 5.56 3.87l-.001.047.002.047q.004.086.004.173A3.546 3.546 0 0 1 17.454 18H8.819a5.818 5.818 0 0 1 0-11.636"
        />
      </svg>
    );
  },
);

export default ProCloudy2Line;
