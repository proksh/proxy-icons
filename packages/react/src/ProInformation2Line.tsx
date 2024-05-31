import * as React from "react";
import { IconProps } from "./types";

export const ProInformation2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 10.5h-3v2h1V15h-1v2h4v-2h-1zm-1-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        />
      </svg>
    );
  },
);

export default ProInformation2Line;
