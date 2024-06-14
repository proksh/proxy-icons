import * as React from "react";
import { IconProps } from "./types";

export const ProCompassFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m11.414 1.414 2.121-4.95-4.95 2.122-2.12 4.95z"
        />
      </svg>
    );
  },
);

export default ProCompassFill;
