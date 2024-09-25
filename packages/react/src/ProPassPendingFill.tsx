import * as React from "react";
import { IconProps } from "./types";

export const ProPassPendingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        <path
          fill={color}
          d="M1 4h22v16H1zm4 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-1 6.5h2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3M14 9v6h2V9zm3 6h2V9h-2z"
        />
      </svg>
    );
  },
);

export default ProPassPendingFill;
