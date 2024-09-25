import * as React from "react";
import { IconProps } from "./types";

export const ProCopyleftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-7.573-1.763a3 3 0 0 0-4.854 0L7.955 9.06a5 5 0 1 1 0 5.878l1.618-1.176a3 3 0 0 0 4.854-3.526"
        />
      </svg>
    );
  },
);

export default ProCopyleftFill;
