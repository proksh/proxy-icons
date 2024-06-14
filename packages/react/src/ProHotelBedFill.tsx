import * as React from "react";
import { IconProps } from "./types";

export const ProHotelBedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 20v-3h16v3h2v-9a4 4 0 0 0-4-4h-5l-1 1v6H4V4H2v16z"
        />
        <path
          fill={color}
          d="M8 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        />
      </svg>
    );
  },
);

export default ProHotelBedFill;
