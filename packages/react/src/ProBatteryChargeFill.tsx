import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryChargeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5 2 6v12l1 1h16l1-1V6l-1-1zm9 1v5h3l-5 7v-5H7zm9 9V9h2v6z"
        />
      </svg>
    );
  },
);

export default ProBatteryChargeFill;
