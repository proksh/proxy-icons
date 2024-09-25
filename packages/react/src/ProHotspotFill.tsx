import * as React from "react";
import { IconProps } from "./types";

export const ProHotspotFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 9V7a2 2 0 0 1 2 2z" />
        <path fill={color} d="M16 9a3 3 0 0 0-3-3V4a5 5 0 0 1 5 5z" />
        <path
          fill={color}
          d="M19 9a6 6 0 0 0-6-6V1a8 8 0 0 1 8 8zM6 2h5v9h8v10l-1 1H6l-1-1V3z"
        />
      </svg>
    );
  },
);

export default ProHotspotFill;
