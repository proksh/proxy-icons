import * as React from "react";
import { IconProps } from "./types";

export const ProShapeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2a3 3 0 0 0-1 5.83v8.34A3.001 3.001 0 1 0 7.83 20h8.34A3.001 3.001 0 1 0 20 16.17V7.83A3.001 3.001 0 1 0 16.17 4H7.83A3 3 0 0 0 5 2m13 5.83v8.34A3 3 0 0 0 16.17 18H7.83A3 3 0 0 0 6 16.17V7.83A3 3 0 0 0 7.83 6h8.34A3 3 0 0 0 18 7.83M4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2m13 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-15a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        />
      </svg>
    );
  },
);

export default ProShapeLine;
