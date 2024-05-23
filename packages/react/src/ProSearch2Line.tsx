import * as React from "react";
import { IconProps } from "./types";

export const ProSearch2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0M18 17l4 4-1.414 1.414-4-4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSearch2Line;
