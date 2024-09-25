import * as React from "react";
import { IconProps } from "./types";

export const ProContrast2Line = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M7.111 15.48a9 9 0 0 0 8.369-8.37 6 6 0 1 1-8.368 8.368"
        />
        <path
          fill={color}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m8-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
        />
      </svg>
    );
  },
);

export default ProContrast2Line;
