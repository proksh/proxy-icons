import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryChargeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 5h7.257l-1.43 2H4v10h4v2H3l-1-1V6z" />
        <path fill={color} d="m10 18 5-7h-3V6l-5 7h3z" />
        <path
          fill={color}
          d="M18 17h-4.828l-1.429 2H19l1-1V6l-1-1h-5v2h4zm3-8v6h2V9z"
        />
      </svg>
    );
  },
);

export default ProBatteryChargeLine;
