import * as React from "react";
import { IconProps } from "./types";

export const ProAirplayFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v14l-1 1h-3v-2h2V5H4v12h2v2H3l-1-1z"
        />
        <path fill={color} d="M17.964 21 12 12.8 6.036 21z" />
      </svg>
    );
  },
);

export default ProAirplayFill;
