import * as React from "react";
import { IconProps } from "./types";

export const ProDrinks2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 1h4.677l2 5H21v2h-2.095l-.968 15H6.064l-1-15H3V6h5.523l-1.2-3H4zm3.272 10.045c2.1.153 3.535.671 4.823 1.136l.181.066c1.32.474 2.502.872 4.298.814L16.901 8H7.069z"
        />
      </svg>
    );
  },
);

export default ProDrinks2Fill;
