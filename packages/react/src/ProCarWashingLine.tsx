import * as React from "react";
import { IconProps } from "./types";

export const ProCarWashingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 5V2h2v3zm1.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M19 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="M18.535 7 22 12.197V23h-3v-2H5v2H2V12.197L5.465 7zm.93 5-2-3H6.535l-2 3zM4 14v5h16v-5zm9-12v3h2V2zm4 4V3h2v3zM9 3v3h2V3z"
        />
      </svg>
    );
  },
);

export default ProCarWashingLine;
