import * as React from "react";
import { IconProps } from "./types";

export const ProMedalLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 5V2h5v3.05a9.9 9.9 0 0 0-3.601 1.07zm10.601 1.12L18 5V2h-5v3.05c1.288.127 2.504.5 3.601 1.07m-3.472 7.327L12 11l-1.129 2.447-2.675.317 1.978 1.83-.525 2.642L12 16.92l2.351 1.316-.525-2.643 1.978-1.83z"
        />
        <path
          fill={color}
          d="M4 15a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
        />
      </svg>
    );
  },
);

export default ProMedalLine;
