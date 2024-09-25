import * as React from "react";
import { IconProps } from "./types";

export const ProGroupFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m10.5 17v3H23v-3a4 4 0 0 0-3.875-3.998A6.47 6.47 0 0 1 20.5 19"
        />
        <path
          fill={color}
          d="M16.5 7a6.48 6.48 0 0 1-2.169 4.847A4.504 4.504 0 0 0 20 7.5a4.5 4.5 0 0 0-4.865-4.485A6.47 6.47 0 0 1 16.5 7M6 14a5 5 0 0 0-5 5v3h18v-3a5 5 0 0 0-5-5z"
        />
      </svg>
    );
  },
);

export default ProGroupFill;
