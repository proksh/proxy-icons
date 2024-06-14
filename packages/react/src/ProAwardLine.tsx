import * as React from "react";
import { IconProps } from "./types";

export const ProAwardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 15.245a8 8 0 1 1 10 0v7.56l-5-3.126-5 3.125zM6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9m3 7.419v2.777l3-1.875 3 1.875v-2.777a8 8 0 0 1-3.206.578A8 8 0 0 1 9 16.42"
        />
      </svg>
    );
  },
);

export default ProAwardLine;
