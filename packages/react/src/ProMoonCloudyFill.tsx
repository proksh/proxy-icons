import * as React from "react";
import { IconProps } from "./types";

export const ProMoonCloudyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.576 6.864c0-2.7 1.742-4.989 4.16-5.81l1.27 1.268a4.136 4.136 0 0 0 5.25 5.25l1.267 1.268a6.15 6.15 0 0 1-2.208 2.991 5.98 5.98 0 0 1 1.68 4.4q.005.112.005.223A5.545 5.545 0 0 1 17.454 22H8.819a7.818 7.818 0 1 1 2.758-15.136m2 0c0 .444.07.871.2 1.272a7.9 7.9 0 0 1 1.76 2.044 6 6 0 0 1 4.017.389 4.2 4.2 0 0 0 1.089-.785 6.137 6.137 0 0 1-5.85-5.85 4.13 4.13 0 0 0-1.216 2.93"
        />
      </svg>
    );
  },
);

export default ProMoonCloudyFill;
