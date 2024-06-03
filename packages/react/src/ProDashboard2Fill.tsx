import * as React from "react";
import { IconProps } from "./types";

export const ProDashboard2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5 0a5 5 0 0 1 6.295-4.83l1.562-1.562a7 7 0 0 0-7.82 11.328l1.418-1.41A4.98 4.98 0 0 1 7 12m11.392-2.857-1.561 1.562a5.01 5.01 0 0 1-1.286 4.82l1.418 1.411A6.98 6.98 0 0 0 19 12a7 7 0 0 0-.608-2.857M12 14a2 2 0 0 0 1.932-2.518l3.775-3.775-1.414-1.414-3.775 3.775A2.002 2.002 0 0 0 10 12a2 2 0 0 0 2 2"
        />
      </svg>
    );
  },
);

export default ProDashboard2Fill;
