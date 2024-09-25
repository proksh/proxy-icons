import * as React from "react";
import { IconProps } from "./types";

export const ProFlightLandFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2.97 5.429 1.448.388.914 3.35 5.071 1.36-.344-8.375 1.932.518 2.759 9.021 5.313 1.424a1.5 1.5 0 1 1-.777 2.898l-15.858-4.25a.75.75 0 0 1-.553-.733zM20 19H4v2h16z"
        />
      </svg>
    );
  },
);

export default ProFlightLandFill;
