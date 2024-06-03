import * as React from "react";
import { IconProps } from "./types";

export const ProWebcamFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
        <path
          fill={color}
          d="M12 1a7 7 0 0 0-7 7v5a7 7 0 1 0 14 0V8a7 7 0 0 0-7-7m0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6M7 23v-2h10v2z"
        />
      </svg>
    );
  },
);

export default ProWebcamFill;
