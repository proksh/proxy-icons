import * as React from "react";
import { IconProps } from "./types";

export const ProDualSim1Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 11h1v6h2v-7l-1-1h-2z" />
        <path
          fill={color}
          d="m14.5 2 .707.293 4.5 4.5L20 7.5V21l-1 1H5l-1-1V3l1-1zM18 7.914 14.086 4H6v16h12z"
        />
      </svg>
    );
  },
);

export default ProDualSim1Line;
