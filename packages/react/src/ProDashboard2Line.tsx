import * as React from "react";
import { IconProps } from "./types";

export const ProDashboard2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7a5 5 0 0 0-3.545 8.526l-1.418 1.41a7 7 0 0 1 7.82-11.328l-1.562 1.561A5 5 0 0 0 12 7m4.83 3.705 1.563-1.562c.39.873.607 1.84.607 2.857a6.98 6.98 0 0 1-2.037 4.936l-1.418-1.41a5.01 5.01 0 0 0 1.285-4.82"
        />
        <path
          fill={color}
          d="M14 12a2 2 0 1 1-1.482-1.932l3.775-3.775 1.414 1.414-3.775 3.775Q14 11.73 14 12"
        />
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        />
      </svg>
    );
  },
);

export default ProDashboard2Line;
