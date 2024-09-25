import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.635 7.358 12 17.892l8.365-10.534A15.9 15.9 0 0 0 12 5a15.9 15.9 0 0 0-8.365 2.358M1.595 6.31A17.9 17.9 0 0 1 12 3c3.875 0 7.467 1.226 10.405 3.31l.205 1.438L12 21.108 1.39 7.748z"
        />
      </svg>
    );
  },
);

export default ProSignalWifiLine;
