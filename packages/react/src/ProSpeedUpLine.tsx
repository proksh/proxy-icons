import * as React from "react";
import { IconProps } from "./types";

export const ProSpeedUpLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 13a8 8 0 1 1 13.647 5.667l1.411 1.417A9.97 9.97 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.942 7.084l1.411-1.417A7.97 7.97 0 0 1 4 13"
        />
        <path fill={color} d="m15.293 8.293-4.5 4.5 1.414 1.414 4.5-4.5z" />
      </svg>
    );
  },
);

export default ProSpeedUpLine;
