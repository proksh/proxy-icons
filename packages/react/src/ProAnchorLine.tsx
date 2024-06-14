import * as React from "react";
import { IconProps } from "./types";

export const ProAnchorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 6a4 4 0 1 1 5 3.874v10.064A8.004 8.004 0 0 0 19.938 13H17v-2h5v1c0 5.523-4.477 10-10 10S2 17.523 2 12v-1h5v2H4.062A8.004 8.004 0 0 0 11 19.938V9.874A4 4 0 0 1 8 6m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </svg>
    );
  },
);

export default ProAnchorLine;
