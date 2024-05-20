import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 12c0-5.523-4.477-10-10-10C6.473 2 1.993 6.488 2 12.013L6.995 7v3.438H12v3.124H6.995V17L2 12.013C2.007 17.53 6.481 22 12 22c5.523 0 10-4.477 10-10"
        />
      </svg>
    );
  },
);

export default ProLogoutCircleFill;
