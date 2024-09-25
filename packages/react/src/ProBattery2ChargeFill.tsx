import * as React from "react";
import { IconProps } from "./types";

export const ProBattery2ChargeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 3 1-1h4l1 1v1h3l1 1v16l-1 1H6l-1-1V5l1-1h3zm4 4-5 7h3v5l5-7h-3z"
        />
      </svg>
    );
  },
);

export default ProBattery2ChargeFill;
