import * as React from "react";
import { IconProps } from "./types";

export const ProCopyrightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m7.573-1.763a3 3 0 0 1 4.854 0l1.618-1.176a5 5 0 1 0 0 5.878l-1.618-1.176a3 3 0 0 1-4.854-3.526"
        />
      </svg>
    );
  },
);

export default ProCopyrightFill;
