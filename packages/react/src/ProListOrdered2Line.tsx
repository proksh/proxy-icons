import * as React from "react";
import { IconProps } from "./types";

export const ProListOrdered2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 5H3V3h2.5l1 1v4H8v2H3V8h1.5zm1.667 10H3v-2h4.167l1 1v2.5l-1 1H4.834v.5H8v2H2.834v-3.5l1-1h2.333zM10 6h11V4H10zm11 7H10v-2h11zm-11 7h11v-2H10z"
        />
      </svg>
    );
  },
);

export default ProListOrdered2Line;
