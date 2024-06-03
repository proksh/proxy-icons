import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryLowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5h16l1 1v12l-1 1H3l-1-1V6zm6 3H5v8h4zm12 7V9h2v6z"
        />
      </svg>
    );
  },
);

export default ProBatteryLowFill;
