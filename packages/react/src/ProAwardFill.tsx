import * as React from "react";
import { IconProps } from "./types";

export const ProAwardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
        <path
          fill={color}
          d="M17 15.245a8 8 0 1 0-10 0v7.56l5-3.126 5 3.125zM12 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12"
        />
      </svg>
    );
  },
);

export default ProAwardFill;
