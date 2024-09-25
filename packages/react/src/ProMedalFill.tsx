import * as React from "react";
import { IconProps } from "./types";

export const ProMedalFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 5V2h5v3.05a9.9 9.9 0 0 0-3.601 1.07zm10.601 1.12L18 5V2h-5v3.05c1.288.127 2.504.5 3.601 1.07M12 7a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1.129 6.447 2.675.317-1.978 1.83.525 2.642L12 16.92l-2.351 1.316.525-2.643-1.978-1.83 2.675-.316L12 11z"
        />
      </svg>
    );
  },
);

export default ProMedalFill;
