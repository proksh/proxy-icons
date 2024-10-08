import * as React from "react";
import { IconProps } from "./types";

export const ProChargingPileFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20.707 6.293-4-4-1.414 1.414L17 5.414V9l1 1h1v8a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3V4l-1-1H4L3 4v16l1 1h9l1-1v-5a1 1 0 0 1 1 1v2a3 3 0 1 0 6 0V7zM9.25 7.5v3.682h2.25L7.75 16.5v-3.682H5.5z"
        />
      </svg>
    );
  },
);

export default ProChargingPileFill;
