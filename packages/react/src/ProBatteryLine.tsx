import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5 2 6v12l1 1h16l1-1V6l-1-1zm1 12V7h14v10zm17-8v6h2V9z"
        />
      </svg>
    );
  },
);

export default ProBatteryLine;
