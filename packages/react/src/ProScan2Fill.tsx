import * as React from "react";
import { IconProps } from "./types";

export const ProScan2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 19A7 7 0 1 0 8.05 6.22L5.901 4.075A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.96 9.96 0 0 1 2.446-6.553l2.13 2.129A7 7 0 0 0 12 19"
        />
        <path fill={color} d="M8 9a5 5 0 1 0 1.498-1.33l3.916 3.916L12 13z" />
      </svg>
    );
  },
);

export default ProScan2Fill;
