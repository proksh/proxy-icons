import * as React from "react";
import { IconProps } from "./types";

export const ProSearchFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 10.5a8.5 8.5 0 1 1 14.99 5.49L22 21l-1.414 1.414-5.06-5.059A8.5 8.5 0 0 1 2 10.5"
        />
      </svg>
    );
  },
);

export default ProSearchFill;
