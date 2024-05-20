import * as React from "react";
import { IconProps } from "./types";

export const ProSkipRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 18h2V6h-2zm-2.793-6.707-5.5-5.5L6 6.5v11l1.707.707 5.5-5.5z"
        />
      </svg>
    );
  },
);

export default ProSkipRightFill;
