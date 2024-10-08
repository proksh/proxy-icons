import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryShareLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 3 1-1h4l1 1v1h3l1 1v3h-2V6h-4V4h-2v2H7v14h10v-4h2v5l-1 1H6l-1-1V5l1-1h3z"
        />
        <path
          fill={color}
          d="m16.086 11-1.293-1.293 1.414-1.414L19.914 12l-3.707 3.707-1.414-1.414L16.086 13H12v5h-2v-6l1-1z"
        />
      </svg>
    );
  },
);

export default ProBatteryShareLine;
