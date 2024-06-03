import * as React from "react";
import { IconProps } from "./types";

export const ProPhoneCameraFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        <path
          fill={color}
          d="M1 4v15h22V4zm13 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 6.5v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProPhoneCameraFill;
