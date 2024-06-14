import * as React from "react";
import { IconProps } from "./types";

export const ProKeyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 7a5 5 0 1 0 4.9 6h3.6v3h3v-3h.5v4h3v-4h1v-2H10.9A5 5 0 0 0 6 7m0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
        />
      </svg>
    );
  },
);

export default ProKeyFill;
