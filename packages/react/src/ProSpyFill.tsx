import * as React from "react";
import { IconProps } from "./types";

export const ProSpyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 4 1-1h14l1 1v6h2v2H2v-2h2zm3 9a4 4 0 1 0 4 4h2a4 4 0 1 0 .535-2h-3.07A4 4 0 0 0 7 13"
        />
      </svg>
    );
  },
);

export default ProSpyFill;
