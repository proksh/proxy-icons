import * as React from "react";
import { IconProps } from "./types";

export const ProBookmark3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3.5 1-1h14l1 1v18l-1.54.841L12 18.19l-6.46 4.15L4 21.5zm9.41 5.558L12 6l-1.41 3.058-3.345.397 2.472 2.287-.656 3.303L12 13.4l2.939 1.645-.656-3.303 2.472-2.287z"
        />
      </svg>
    );
  },
);

export default ProBookmark3Fill;
