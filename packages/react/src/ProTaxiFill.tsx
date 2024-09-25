import * as React from "react";
import { IconProps } from "./types";

export const ProTaxiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3h6v2h3.594L22 11.245V22h-3v-2H5v2H2V11.245L5.406 5H9zm10.588 8-2.182-4H6.594l-2.182 4zM9 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m9 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
      </svg>
    );
  },
);

export default ProTaxiFill;
