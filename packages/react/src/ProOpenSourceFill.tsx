import * as React from "react";
import { IconProps } from "./types";

export const ProOpenSourceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.001 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55A3 3 0 0 0 12 9a3 3 0 0 0-1.404 5.652l-2.518 6.55A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2"
        />
      </svg>
    );
  },
);

export default ProOpenSourceFill;
