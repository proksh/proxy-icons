import * as React from "react";
import { IconProps } from "./types";

export const ProHomeSmile2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 15a3 3 0 0 1-3-3H7a5 5 0 0 0 10 0h-2a3 3 0 0 1-3 3"
        />
        <path
          fill={color}
          d="m21 8.5-9-6.75L3 8.5V21h18zM5 19V9.5l7-5.25 7 5.25V19z"
        />
      </svg>
    );
  },
);

export default ProHomeSmile2Line;
