import * as React from "react";
import { IconProps } from "./types";

export const ProTyphoonFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 12c0-2.088.774-3.866 2.072-5.318 2.07-2.315 5.475-3.8 9.208-4.392A24 24 0 0 1 18 2l-3.198 2.398C18.342 5.431 21 8.371 21 12c0 2.088-.774 3.866-2.072 5.318-2.07 2.314-5.475 3.8-9.208 4.392A24 24 0 0 1 6 22l3.198-2.398C5.658 18.569 3 15.629 3 12m5 0c0 2.096 1.97 3.5 4 3.5s4-1.404 4-3.5-1.97-3.5-4-3.5S8 9.904 8 12"
        />
      </svg>
    );
  },
);

export default ProTyphoonFill;
