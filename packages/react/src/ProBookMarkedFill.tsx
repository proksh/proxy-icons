import * as React from "react";
import { IconProps } from "./types";

export const ProBookMarkedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5a3 3 0 0 1 3-3h15v20H6a3 3 0 0 1-3-3zm3.5 12H19v3H6.5a1.5 1.5 0 0 1 0-3M17 4h-7v8l3.5-2 3.5 2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBookMarkedFill;
