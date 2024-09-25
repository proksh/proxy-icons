import * as React from "react";
import { IconProps } from "./types";

export const ProLineChartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 3H3v18h18v-2H5z" />
        <path
          fill={color}
          d="m16.219 14.414 5.595-7.833-1.628-1.162-4.405 6.167-3.956-2.968-4.606 5.757 1.562 1.25 3.394-4.243z"
        />
      </svg>
    );
  },
);

export default ProLineChartLine;
