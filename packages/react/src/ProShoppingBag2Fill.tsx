import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBag2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V2zm9 11a5 5 0 0 1-5-5V6h2v2a3 3 0 1 0 6 0V6h2v2a5 5 0 0 1-5 5"
        />
      </svg>
    );
  },
);

export default ProShoppingBag2Fill;
