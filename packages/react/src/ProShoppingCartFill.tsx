import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingCartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4h2v12l1 1h14l.97-.758 2.5-10L21.5 5H8v2h12.22l-.5 2H6V3L5 2H2zm16 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
      </svg>
    );
  },
);

export default ProShoppingCartFill;
