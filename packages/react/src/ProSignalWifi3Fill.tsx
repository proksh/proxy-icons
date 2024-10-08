import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifi3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m22.61 7.748-.205-1.438A17.9 17.9 0 0 0 12 3 17.9 17.9 0 0 0 1.595 6.31L1.39 7.748 12 21.108zm-4.128 1.981A12.94 12.94 0 0 0 12 8c-2.36 0-4.574.63-6.482 1.73L3.635 7.357A15.9 15.9 0 0 1 12 5c3.067 0 5.931.862 8.365 2.358z"
        />
      </svg>
    );
  },
);

export default ProSignalWifi3Fill;
