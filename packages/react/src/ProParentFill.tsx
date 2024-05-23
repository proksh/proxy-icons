import * as React from "react";
import { IconProps } from "./types";

export const ProParentFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m8.5 9.5v.5h-9v-.5a4.5 4.5 0 1 1 9 0M7 12a5 5 0 0 0-5 5v4h10v-4a5 5 0 0 0-5-5"
        />
      </svg>
    );
  },
);

export default ProParentFill;
