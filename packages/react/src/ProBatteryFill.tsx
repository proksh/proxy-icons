import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m2 6 1-1h16l1 1v12l-1 1H3l-1-1zm19 3v6h2V9z" />
      </svg>
    );
  },
);

export default ProBatteryFill;
