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
          d="M3 5a3 3 0 0 1 3-3h15v20H6a3 3 0 0 1-3-3zm3.5 12a1.5 1.5 0 0 0 0 3H19v-3zM17 4h-7v8l3.5-2 3.5 2z"
        />
      </svg>
    );
  },
);

export default ProBookMarkedFill;
