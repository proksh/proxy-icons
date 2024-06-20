import * as React from "react";
import { IconProps } from "./types";

export const ProCrosshair2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="M13 1h-2v2.055A9.004 9.004 0 0 0 3.055 11H1v2h2.055A9.004 9.004 0 0 0 11 20.945V23h2v-2.055A9.004 9.004 0 0 0 20.945 13H23v-2h-2.055A9.004 9.004 0 0 0 13 3.055zM5.07 13H7v-2H5.07A7.005 7.005 0 0 1 11 5.07V7h2V5.07A7 7 0 0 1 18.93 11H17v2h1.93A7 7 0 0 1 13 18.93V17h-2v1.93A7 7 0 0 1 5.07 13"
        />
      </svg>
    );
  },
);

export default ProCrosshair2Line;
