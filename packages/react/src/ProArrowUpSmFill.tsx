import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6 13.5-.707-1.707 6-6h1.414l6 6L18 13.5h-5v5h-2v-5z"
        />
      </svg>
    );
  },
);

export default ProArrowUpSmFill;
