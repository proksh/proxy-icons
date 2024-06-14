import * as React from "react";
import { IconProps } from "./types";

export const ProMoonFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.102 3.473a9 9 0 1 0 11.421 11.421l-1.269-1.268a7 7 0 0 1-2.254.37 7 7 0 0 1-6.63-9.254z"
        />
      </svg>
    );
  },
);

export default ProMoonFill;
