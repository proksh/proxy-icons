import * as React from "react";
import { IconProps } from "./types";

export const ProParkingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 2H5v19h4v-6h4.5a6.5 6.5 0 1 0 0-13M9 11V6h4.5a2.5 2.5 0 0 1 0 5z"
        />
      </svg>
    );
  },
);

export default ProParkingFill;
