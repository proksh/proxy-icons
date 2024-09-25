import * as React from "react";
import { IconProps } from "./types";

export const ProBattery2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 3 1-1h4l1 1v1h3l1 1v16l-1 1H6l-1-1V5l1-1h3zm2 1v2H7v14h10V6h-4V4z"
        />
      </svg>
    );
  },
);

export default ProBattery2Line;
