import * as React from "react";
import { IconProps } from "./types";

export const ProBatteryShareFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 3 1-1h4l1 1v1h3l1 1v6.086l-2.793-2.793-1.414 1.414L16.086 11H11l-1 1v6h2v-5h4.086l-1.293 1.293 1.414 1.414L19 12.914V21l-1 1H6l-1-1V5l1-1h3z"
        />
      </svg>
    );
  },
);

export default ProBatteryShareFill;
