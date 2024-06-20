import * as React from "react";
import { IconProps } from "./types";

export const ProRedPacketFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h18v2.364a10.02 10.02 0 0 1-6.827 5.4 2.499 2.499 0 0 0-4.346 0A10.02 10.02 0 0 1 3 4.363z"
        />
        <path
          fill={color}
          d="M3 7.937V22h18V7.937a12 12 0 0 1-6.619 3.827 2.501 2.501 0 0 1-4.762 0A12 12 0 0 1 3 7.937"
        />
      </svg>
    );
  },
);

export default ProRedPacketFill;
