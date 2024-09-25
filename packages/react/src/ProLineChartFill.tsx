import * as React from "react";
import { IconProps } from "./types";

export const ProLineChartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5.5 3h-3v18.5H21v-3H5.5z" />
        <path
          fill={color}
          d="m16.329 15.121 5.892-8.25-2.441-1.743-4.108 5.75-3.935-2.95-4.908 6.135 2.343 1.874 3.092-3.865z"
        />
      </svg>
    );
  },
);

export default ProLineChartFill;
