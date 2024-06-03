import * as React from "react";
import { IconProps } from "./types";

export const ProNotification4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 10a8 8 0 1 1 16 0v7h2v2H2v-2h2zm14 7v-7a6 6 0 0 0-12 0v7zm-6 6a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3"
        />
      </svg>
    );
  },
);

export default ProNotification4Line;
