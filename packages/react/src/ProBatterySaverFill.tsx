import * as React from "react";
import { IconProps } from "./types";

export const ProBatterySaverFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3v1H6L5 5v16l1 1h12l1-1V5l-1-1h-3V3l-1-1h-4zm2 14v-3H8v-2h3V9h2v3h3v2h-3v3z"
        />
      </svg>
    );
  },
);

export default ProBatterySaverFill;
