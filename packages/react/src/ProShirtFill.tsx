import * as React from "react";
import { IconProps } from "./types";

export const ProShirtFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.167 3H7.833L12 8zM7 4H4L3 5v16l1 1h7V9.4L7 11zm6 18h7l1-1V5l-1-1h-3v7l-4-1.6zm6-8v2h-4v-2z"
        />
      </svg>
    );
  },
);

export default ProShirtFill;
