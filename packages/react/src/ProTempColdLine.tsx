import * as React from "react";
import { IconProps } from "./types";

export const ProTempColdLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 20a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4" />
        <path
          fill={color}
          d="M12 1a4 4 0 0 0-4 4v5.255a7 7 0 1 0 8 0V5a4 4 0 0 0-4-4m-2 4a2 2 0 1 1 4 0v6.38l.5.288a5 5 0 1 1-4.999 0L10 11.38z"
        />
      </svg>
    );
  },
);

export default ProTempColdLine;
