import * as React from "react";
import { IconProps } from "./types";

export const ProGasStationFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.707 2.293 4 4L21 7v11a3 3 0 1 1-6 0v-2a1 1 0 0 0-1-1v5l-1 1H4l-1-1V4l1-1h9l1 1v9a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-8h-1l-1-1V5.414l-1.707-1.707zM12 9V5H5v4z"
        />
      </svg>
    );
  },
);

export default ProGasStationFill;
