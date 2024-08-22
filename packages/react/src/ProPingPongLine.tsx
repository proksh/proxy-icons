import * as React from "react";
import { IconProps } from "./types";

export const ProPingPongLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.218 4.303c3.098 3.098 3.609 7.804 1.532 11.432l2.357 2.357v1.414l-2.121 2.121H18.57l-2.356-2.356c-3.628 2.076-8.334 1.566-11.433-1.533A9.5 9.5 0 1 1 18.217 4.303M6.197 5.718a7.5 7.5 0 0 1 10.948.365L6.562 16.666a7.5 7.5 0 0 1-.365-10.949m2.07 12.072a7.52 7.52 0 0 0 6.467 0l-1.82-1.82 3.536-3.535 1.82 1.82a7.52 7.52 0 0 0 0-6.468zm8.183-2.526-.707.707 3.536 3.535.707-.707z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProPingPongLine;
