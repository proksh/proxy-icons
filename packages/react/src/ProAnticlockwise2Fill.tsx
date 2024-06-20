import * as React from "react";
import { IconProps } from "./types";

export const ProAnticlockwise2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.293 4.293 3.5-3.5L14.5 1.5V4H16a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3h-1.5v2.5l-1.707.707-3.5-3.5zM4 10l-1 1v10l1 1h10l1-1V11l-1-1z"
        />
      </svg>
    );
  },
);

export default ProAnticlockwise2Fill;
