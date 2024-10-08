import * as React from "react";
import { IconProps } from "./types";

export const ProLoopLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.386 5.464A8 8 0 0 1 20 12h2a9.99 9.99 0 0 0-4-8 9.98 9.98 0 0 0-6-2 9.98 9.98 0 0 0-8 4V3.5H2v6h6v-2H5.384a8 8 0 0 1 2.002-2.036M12 20a8 8 0 0 1-8-8H2a9.97 9.97 0 0 0 2.929 7.071A9.97 9.97 0 0 0 12 22a9.95 9.95 0 0 0 5.528-1.666A10 10 0 0 0 20 18.001V20.5h2v-6h-6v2h2.616q-.135.198-.282.388A7.99 7.99 0 0 1 12 20"
        />
      </svg>
    );
  },
);

export default ProLoopLeftLine;
