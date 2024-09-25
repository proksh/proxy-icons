import * as React from "react";
import { IconProps } from "./types";

export const ProArrowDownSmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 10.5H6l-.707 1.707 6 6h1.414l6-6L18 10.5h-5v-5h-2z"
        />
      </svg>
    );
  },
);

export default ProArrowDownSmFill;
