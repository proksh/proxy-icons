import * as React from "react";
import { IconProps } from "./types";

export const ProAnticlockwiseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 8v2.586l1.793-1.793 1.414 1.414L5 14.414.793 10.207l1.414-1.414L4 10.586V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3m4 12 1 1h10l1-1V10l-1-1H11l-1 1zm10-1h-8v-8h8z"
        />
      </svg>
    );
  },
);

export default ProAnticlockwiseLine;
