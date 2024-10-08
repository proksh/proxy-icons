import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifi2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m22.61 7.748-.205-1.438A17.9 17.9 0 0 0 12 3 17.9 17.9 0 0 0 1.595 6.31L1.39 7.748 12 21.108zm-5.388 3.568A10.96 10.96 0 0 0 12 10c-1.889 0-3.668.477-5.222 1.316L3.635 7.358A15.9 15.9 0 0 1 12 5c3.067 0 5.931.862 8.365 2.358z"
        />
      </svg>
    );
  },
);

export default ProSignalWifi2Fill;
