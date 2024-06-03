import * as React from "react";
import { IconProps } from "./types";

export const ProForward5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a7.99 7.99 0 0 1 6.616 3.5H16v2h6v-6h-2V6a9.98 9.98 0 0 0-8-4C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-8-8"
        />
        <path
          fill={color}
          d="M14.5 8.75H9.75v4h3a.5.5 0 0 1 0 1H9.5v1.5h3.25a2 2 0 1 0 0-4h-1.5v-1h3.25z"
        />
      </svg>
    );
  },
);

export default ProForward5Line;
