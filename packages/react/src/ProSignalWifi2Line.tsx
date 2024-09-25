import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifi2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 21.108 10.61-13.36-.205-1.438A17.9 17.9 0 0 0 12 3 17.9 17.9 0 0 0 1.595 6.31L1.39 7.748zm-5.222-9.792L3.635 7.358A15.9 15.9 0 0 1 12 5c3.067 0 5.931.862 8.365 2.358l-3.143 3.958A10.96 10.96 0 0 0 12 10c-1.889 0-3.668.477-5.222 1.316m9.176 1.597L12 17.892l-3.954-4.98A8.96 8.96 0 0 1 12 12a8.96 8.96 0 0 1 3.954.913"
        />
      </svg>
    );
  },
);

export default ProSignalWifi2Line;
