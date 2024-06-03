import * as React from "react";
import { IconProps } from "./types";

export const ProAspectRatioFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V3zm4 4h5v2H8v3H6zm10 8v-3h2v5h-5v-2z"
        />
      </svg>
    );
  },
);

export default ProAspectRatioFill;
