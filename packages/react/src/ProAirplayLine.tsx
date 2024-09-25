import * as React from "react";
import { IconProps } from "./types";

export const ProAirplayLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v14l1 1h3v-2H4V5h16v12h-2v2h3l1-1V4l-1-1z"
        />
        <path
          fill={color}
          d="M17.964 21 12 12.8 6.036 21zm-3.928-2H9.964L12 16.2z"
        />
      </svg>
    );
  },
);

export default ProAirplayLine;
