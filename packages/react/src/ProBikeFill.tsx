import * as React from "react";
import { IconProps } from "./types";

export const ProBikeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5h3.232l.573 2.148L6 9.706V7h2V5H2v2h2v5h1.128L16.32 9.08l.288 1.082a6 6 0 0 1 2.036-.128l-1.678-6.292L16 3h-4zm6.924 6.085A5.002 5.002 0 0 1 18 21a5 5 0 1 1 .924-9.915M18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        />
      </svg>
    );
  },
);

export default ProBikeFill;
