import * as React from "react";
import { IconProps } from "./types";

export const ProHonourFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h18v17.154l-9 3.938-9-3.938zm13 8V8H8v2zm0 4v-2H8v2z"
        />
      </svg>
    );
  },
);

export default ProHonourFill;
