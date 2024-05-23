import * as React from "react";
import { IconProps } from "./types";

export const ProUser2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M5 22c0-3.192 3.004-6 7-6s7 2.808 7 6h2c0-4.54-4.159-8-9-8s-9 3.46-9 8z"
        />
      </svg>
    );
  },
);

export default ProUser2Line;
