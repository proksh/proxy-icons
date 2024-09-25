import * as React from "react";
import { IconProps } from "./types";

export const ProCoupon2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v7h-1a2 2 0 1 0 0 4h1v7H2v-7h1a2 2 0 1 0 0-4H2zm11 2H4v3.126a4.002 4.002 0 0 1 0 7.748V19h9zm2 14h5v-3.126a4.002 4.002 0 0 1 0-7.748V5h-5z"
        />
      </svg>
    );
  },
);

export default ProCoupon2Line;
