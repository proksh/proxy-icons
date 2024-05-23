import * as React from "react";
import { IconProps } from "./types";

export const ProAppsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8m10 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
      </svg>
    );
  },
);

export default ProAppsFill;
