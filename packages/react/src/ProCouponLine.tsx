import * as React from "react";
import { IconProps } from "./types";

export const ProCouponLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 9h6v2H9zm6 4H9v2h6z" />
        <path
          fill={color}
          d="M2 3h20v7h-1a2 2 0 1 0 0 4h1v7H2v-7h1a2 2 0 1 0 0-4H2zm2 2v3.126a4.002 4.002 0 0 1 0 7.748V19h16v-3.126a4.002 4.002 0 0 1 0-7.748V5z"
        />
      </svg>
    );
  },
);

export default ProCouponLine;
