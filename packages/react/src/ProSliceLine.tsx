import * as React from "react";
import { IconProps } from "./types";

export const ProSliceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.205 19.345 18.303 3.247l3.182 3.182-5.657 5.657 1.768 1.768-.707.707c-3.322 3.321-6.505 4.654-8.908 5.134-1.196.24-2.186.265-2.89.228a8 8 0 0 1-.83-.083c-.696-.11-1.373-.324-2.056-.495m4.277-1.448q.505-.045 1.107-.163c1.856-.37 4.398-1.368 7.163-3.896L13 12.086l5.657-5.657-.354-.354z"
        />
      </svg>
    );
  },
);

export default ProSliceLine;
