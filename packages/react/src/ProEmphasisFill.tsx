import * as React from "react";
import { IconProps } from "./types";

export const ProEmphasisFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 2.5H18v3H8.5v3H17v3H8.5v3H18v3H5.5zm13.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProEmphasisFill;
