import * as React from "react";
import { IconProps } from "./types";

export const ProHotelBedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 16.5V20H2V4h2v10.5h8V8l1-1h5a4 4 0 0 1 4 4v9h-2v-3.5zM20 14v-3a2 2 0 0 0-2-2h-4v5z"
        />
        <path
          fill={color}
          d="M5 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </svg>
    );
  },
);

export default ProHotelBedLine;
