import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifi1Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 21.108 10.61-13.36-.205-1.438A17.9 17.9 0 0 0 12 3 17.9 17.9 0 0 0 1.595 6.31L1.39 7.748zm-3.315-7.39-5.05-6.36A15.9 15.9 0 0 1 12 5c3.067 0 5.931.862 8.365 2.358l-5.05 6.36A8 8 0 0 0 12 13a8 8 0 0 0-3.315.717m5.335 1.63L12 17.892l-2.02-2.544A6 6 0 0 1 12 15c.71 0 1.39.123 2.02.348"
        />
      </svg>
    );
  },
);

export default ProSignalWifi1Line;
