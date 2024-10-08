import * as React from "react";
import { IconProps } from "./types";

export const ProCelsiusFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m12.5-3A6.5 6.5 0 0 0 9.5 10v5a6.5 6.5 0 1 0 13 0h-3a3.5 3.5 0 1 1-7 0v-5a3.5 3.5 0 1 1 7 0h3A6.5 6.5 0 0 0 16 3.5"
        />
      </svg>
    );
  },
);

export default ProCelsiusFill;
