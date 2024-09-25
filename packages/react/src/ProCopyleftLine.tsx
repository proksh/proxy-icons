import * as React from "react";
import { IconProps } from "./types";

export const ProCopyleftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.427 10.237a3 3 0 0 0-4.854 0L7.955 9.06a5 5 0 1 1 0 5.878l1.618-1.176a3 3 0 0 0 4.854-3.526"
        />
        <path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m8 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
        />
      </svg>
    );
  },
);

export default ProCopyleftLine;
