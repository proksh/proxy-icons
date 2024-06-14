import * as React from "react";
import { IconProps } from "./types";

export const ProCloudy2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.818 4.364a7.81 7.81 0 0 1 6.718 3.816Q16.243 8.002 17 8a6 6 0 0 1 5.996 6.232q.004.11.004.223A5.545 5.545 0 0 1 17.454 20H8.819a7.818 7.818 0 1 1 0-15.636"
        />
      </svg>
    );
  },
);

export default ProCloudy2Fill;
