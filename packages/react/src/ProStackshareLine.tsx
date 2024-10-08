import * as React from "react";
import { IconProps } from "./types";

export const ProStackshareLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1 3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1 3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1H13zm9.464 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </svg>
    );
  },
);

export default ProStackshareLine;
