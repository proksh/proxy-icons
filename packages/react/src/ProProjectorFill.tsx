import * as React from "react";
import { IconProps } from "./types";

export const ProProjectorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v6h-3.126a4.002 4.002 0 0 0-7.748 0H2zm0 8v8l1 1h18l1-1v-8h-3.126a4.002 4.002 0 0 1-7.748 0zm4 3h2v2H6z"
        />
        <path fill={color} d="M15 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
      </svg>
    );
  },
);

export default ProProjectorFill;
