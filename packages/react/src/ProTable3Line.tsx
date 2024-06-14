import * as React from "react";
import { IconProps } from "./types";

export const ProTable3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm17 11h-7v-4h7zm-9 0H4v-4h7zm-7 2h7v3H4zm9 0h7v3h-7zM4 8V5h7v3zm9 0V5h7v3z"
        />
      </svg>
    );
  },
);

export default ProTable3Line;
