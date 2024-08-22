import * as React from "react";
import { IconProps } from "./types";

export const ProKeynoteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5 2-.97.757-2 8L3 12h8v8H7v2h10v-2h-4v-8h8l.97-1.242-2-8L19 2z"
        />
      </svg>
    );
  },
);

export default ProKeynoteFill;
