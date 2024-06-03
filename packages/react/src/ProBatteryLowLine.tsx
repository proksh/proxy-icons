import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryLowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 8h4v8H5z" />
        <path
          fill={color}
          d="m2 6 1-1h16l1 1v12l-1 1H3l-1-1zm2 1v10h14V7zm17 2v6h2V9z"
        />
      </svg>
    );
  },
);

export default ProBatteryLowLine;
