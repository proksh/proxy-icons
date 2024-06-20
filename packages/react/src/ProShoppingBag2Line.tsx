import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingBag2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 13a5 5 0 0 1-5-5V6h2v2a3 3 0 1 0 6 0V6h2v2a5 5 0 0 1-5 5"
        />
        <path fill={color} d="M21 2H3v20h18zM5 20V4h14v16z" />
      </svg>
    );
  },
);

export default ProShoppingBag2Line;
