import * as React from "react";
import { IconProps } from "./types";

export const ProTapeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
        <path
          fill={color}
          d="M2 3h20v18H2zm9 9a3 3 0 1 0-3 3h8a3 3 0 1 0-2.83-2h-2.34c.11-.313.17-.65.17-1"
        />
      </svg>
    );
  },
);

export default ProTapeFill;
