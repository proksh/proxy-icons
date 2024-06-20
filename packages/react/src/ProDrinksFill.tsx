import * as React from "react";
import { IconProps } from "./types";

export const ProDrinksFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.82 2H16V0h-2v2H5.18l-1 5H2v2h20V7h-2.18zm.84 9H4.34l1.269 11H18.39z"
        />
      </svg>
    );
  },
);

export default ProDrinksFill;
