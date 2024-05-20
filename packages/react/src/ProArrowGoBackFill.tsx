import * as React from "react";
import { IconProps } from "./types";

export const ProArrowGoBackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.293 5.293-4 4v1.414l4 4L10 14v-3h5a3 3 0 1 1 0 6h-5v2h5a5 5 0 0 0 0-10h-5V6z"
        />
      </svg>
    );
  },
);

export default ProArrowGoBackFill;
