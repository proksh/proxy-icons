import * as React from "react";
import { IconProps } from "./types";

export const ProFileShield2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.914 2H3v20h9v-2H5V4h10v4h4v2h2V7.086z" />
        <path
          fill={color}
          d="M22 12h-9v5.763a3 3 0 0 0 1.139 2.353l3.361 2.66 3.361-2.66A3 3 0 0 0 22 17.763zm-7 5.763V14h5v3.763a1 1 0 0 1-.38.784l-2.12 1.678-2.12-1.678a1 1 0 0 1-.38-.784"
        />
      </svg>
    );
  },
);

export default ProFileShield2Line;
