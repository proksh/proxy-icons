import * as React from "react";
import { IconProps } from "./types";

export const ProDeviceRecoverFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3 1-1h14l1 1v18l-1 1H5l-1-1zm8 6a3 3 0 0 1 3 3h-2.5l2.127 4.255a5.02 5.02 0 0 0 1.987-2.325v-.002A5 5 0 1 0 12 17v-2a3 3 0 1 1 0-6"
        />
      </svg>
    );
  },
);

export default ProDeviceRecoverFill;
