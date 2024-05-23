import * as React from "react";
import { IconProps } from "./types";

export const ProLogoutCircleRFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2c5.527 0 10.008 4.487 10 10.013L17.005 7v3.438H12v3.124h5.005V17L22 12.013C21.993 17.53 17.519 22 12 22 6.477 22 2 17.523 2 12"
        />
      </svg>
    );
  },
);

export default ProLogoutCircleRFill;
