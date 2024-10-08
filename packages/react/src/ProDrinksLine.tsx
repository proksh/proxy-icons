import * as React from "react";
import { IconProps } from "./types";

export const ProDrinksLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 2h2.82l1 5H22v2h-2.109l-1.5 13H5.61L4.11 9H2V7h2.18l1-5H14V0h2zM6.122 9l1.27 11h9.217l1.269-11zM17.78 7l-.6-3H6.82l-.6 3z"
        />
      </svg>
    );
  },
);

export default ProDrinksLine;
