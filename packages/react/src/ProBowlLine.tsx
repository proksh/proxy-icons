import * as React from "react";
import { IconProps } from "./types";

export const ProBowlLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 .5v2.303l-1 1.5V6.5H5V3.697l1-1.5V.5zm5.5 0v2.303l-1 1.5V6.5h-2V3.697l1-1.5V.5zM19 2.803V.5h-2v1.697l-1 1.5V6.5h2V4.303zM2 8h20v1c0 4.452-2.434 8.379-6 10.09V21H8v-1.91C4.434 17.379 2 13.452 2 9zm2.048 2c.446 4.58 3.919 8 7.952 8s7.506-3.42 7.952-8z"
        />
      </svg>
    );
  },
);

export default ProBowlLine;
