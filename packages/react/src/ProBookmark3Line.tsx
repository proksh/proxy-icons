import * as React from "react";
import { IconProps } from "./types";

export const ProBookmark3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5 2.5-1 1v18l1.54.841L12 18.19l6.46 4.152L20 21.5v-18l-1-1zm1 17.168V4.5h12v15.168l-5.46-3.51h-1.08z"
        />
      </svg>
    );
  },
);

export default ProBookmark3Line;
