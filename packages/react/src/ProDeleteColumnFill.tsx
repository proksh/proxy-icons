import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteColumnFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8v18H2zm20 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-2 1v-2h-6v2z"
        />
      </svg>
    );
  },
);

export default ProDeleteColumnFill;
