import * as React from "react";
import { IconProps } from "./types";

export const ProCarWashingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2v3h2V2zm.465 5L2 12.197V23h3v-2h14v2h3V12.197L18.535 7zm12 2 2 3H4.535l2-3zM8 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13 5V2h2v3zm4-2v3h2V3zM9 6V3h2v3z"
        />
      </svg>
    );
  },
);

export default ProCarWashingFill;
