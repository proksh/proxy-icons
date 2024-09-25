import * as React from "react";
import { IconProps } from "./types";

export const ProPieChart2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 2h-1v10h10v-1a9 9 0 0 0-9-9m1 8V4.072A7 7 0 0 1 19.928 10z"
        />
        <path fill={color} d="M10 4.055A9.001 9.001 0 1 0 19.945 14H10z" />
      </svg>
    );
  },
);

export default ProPieChart2Fill;
