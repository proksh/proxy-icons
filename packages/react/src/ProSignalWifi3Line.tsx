import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifi3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 21.108 10.61-13.36-.205-1.438A17.9 17.9 0 0 0 12 3 17.9 17.9 0 0 0 1.595 6.31L1.39 7.748zM5.518 9.729 3.635 7.36A15.9 15.9 0 0 1 12 5c3.067 0 5.931.862 8.365 2.358L18.482 9.73A12.94 12.94 0 0 0 12 8c-2.36 0-4.574.63-6.482 1.73m11.704 1.587L12 17.892l-5.222-6.576A10.95 10.95 0 0 1 12 10c1.891 0 3.669.476 5.222 1.316"
        />
      </svg>
    );
  },
);

export default ProSignalWifi3Line;
