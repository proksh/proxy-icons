import * as React from "react";
import { IconProps } from "./types";

export const ProShieldStarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3.757 3.03 8-2h.486l8 2L21 4v12l-.4.8-8.6 6.45-8.6-6.45L3 16V4zm9.654 6.028L12 6l-1.41 3.058-3.345.397 2.472 2.287-.656 3.303L12 13.4l2.939 1.645-.656-3.303 2.472-2.287z"
        />
      </svg>
    );
  },
);

export default ProShieldStarFill;
