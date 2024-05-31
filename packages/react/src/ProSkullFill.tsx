import * as React from "react";
import { IconProps } from "./types";

export const ProSkullFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v5l-1 1h-3v3l-1 1H7l-1-1v-3H3l-1-1zm7 .5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m9 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
      </svg>
    );
  },
);

export default ProSkullFill;
