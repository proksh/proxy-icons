import * as React from "react";
import { IconProps } from "./types";

export const ProTempColdFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm4 15a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4"
        />
      </svg>
    );
  },
);

export default ProTempColdFill;
