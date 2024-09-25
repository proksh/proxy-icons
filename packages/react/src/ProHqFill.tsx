import * as React from "react";
import { IconProps } from "./types";

export const ProHqFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14.25 13.5v-3h1.5v3z" />
        <path
          fill={color}
          d="M2 3h20v18H2zm4.75 6v6h1.5v-2.25h1.5V15h1.5V9h-1.5v2.25h-1.5V9zm6.75 0-.75.75v4.5l.75.75h.75v1.5h1.5V15h.75l.75-.75v-4.5L16.5 9z"
        />
      </svg>
    );
  },
);

export default ProHqFill;
