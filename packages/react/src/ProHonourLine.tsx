import * as React from "react";
import { IconProps } from "./types";

export const ProHonourLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 10H8V8h8zm-8 4h8v-2H8z" />
        <path
          fill={color}
          d="M3 2h18v17.154l-9 3.938-9-3.938zm2 2v13.846l7 3.063 7-3.063V4z"
        />
      </svg>
    );
  },
);

export default ProHonourLine;
