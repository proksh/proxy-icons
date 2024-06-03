import * as React from "react";
import { IconProps } from "./types";

export const ProBattery2ChargeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m13 7-5 7h3v5l5-7h-3z" />
        <path
          fill={color}
          d="M10 2 9 3v1H6L5 5v16l1 1h12l1-1V5l-1-1h-3V3l-1-1zM7 20V6h4V4h2v2h4v14z"
        />
      </svg>
    );
  },
);

export default ProBattery2ChargeLine;
