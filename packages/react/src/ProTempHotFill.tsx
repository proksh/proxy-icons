import * as React from "react";
import { IconProps } from "./types";

export const ProTempHotFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        <path
          fill={color}
          d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm8 11a4 4 0 0 0-3-3.874V5h-2v7.126A4.002 4.002 0 0 0 12 20a4 4 0 0 0 4-4"
        />
      </svg>
    );
  },
);

export default ProTempHotFill;
