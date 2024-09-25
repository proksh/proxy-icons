import * as React from "react";
import { IconProps } from "./types";

export const ProPieChartBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11V7.1a5.01 5.01 0 0 1 3.9 3.9z" />
        <path
          fill={color}
          d="M11 13V7.1a5.002 5.002 0 0 0 1 9.9 5 5 0 0 0 4.9-4z"
        />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default ProPieChartBoxLine;
