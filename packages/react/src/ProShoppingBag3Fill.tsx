import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBag3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.946 2 3 6.713V22h18V6.713L18.054 2zm11 2 1.25 2H5.804l1.25-2zM12 17a5 5 0 0 1-5-5v-2h2v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-5 5"
        />
      </svg>
    );
  },
);

export default ProShoppingBag3Fill;
