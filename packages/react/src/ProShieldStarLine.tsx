import * as React from "react";
import { IconProps } from "./types";

export const ProShieldStarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.41 9.058 12 6l-1.41 3.058-3.345.397 2.472 2.287-.656 3.303L12 13.4l2.939 1.645-.656-3.303 2.472-2.287z"
        />
        <path
          fill={color}
          d="m11.758 1.03-8 2L3 4v12l.4.8 8.6 6.45 8.6-6.45.4-.8V4l-.758-.97-8-2zM5 15.5V4.78l7-1.75 7 1.75V15.5l-7 5.25z"
        />
      </svg>
    );
  },
);

export default ProShieldStarLine;
