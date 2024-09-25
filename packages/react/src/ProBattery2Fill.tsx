import * as React from "react";
import { IconProps } from "./types";

export const ProBattery2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2 9 3v1H6L5 5v16l1 1h12l1-1V5l-1-1h-3V3l-1-1z"
        />
      </svg>
    );
  },
);

export default ProBattery2Fill;
