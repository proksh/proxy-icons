import * as React from "react";
import { IconProps } from "./types";

export const ProHandSanitizerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.298 2c-.919 0-2.057.115-3.017.8a6.4 6.4 0 0 0-1.613 1.645l1.664 1.11a4.4 4.4 0 0 1 1.109-1.127C6.88 4.115 7.497 4 8.298 4H11v2H8v2H5L4 9v12l1 1h14l1-1V9l-1-1h-3V6h-3V4h4V2zM11 18v-2H9v-2h2v-2h2v2h2v2h-2v2z"
        />
      </svg>
    );
  },
);

export default ProHandSanitizerFill;
