import * as React from "react";
import { IconProps } from "./types";

export const ProPriceTag2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 .728 8 6.286V22H4V7.014zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4 4v-2H8v2zm0 1H8v2h8z"
        />
      </svg>
    );
  },
);

export default ProPriceTag2Fill;
