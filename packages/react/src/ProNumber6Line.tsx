import * as React from "react";
import { IconProps } from "./types";

export const ProNumber6Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.305 2 6.351 12.782a6.5 6.5 0 1 0 3.977-3.065L14.59 2zM16.5 16a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
        />
      </svg>
    );
  },
);

export default ProNumber6Line;
