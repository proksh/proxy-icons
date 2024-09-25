import * as React from "react";
import { IconProps } from "./types";

export const ProShareForwardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.63 3.724 13 4.5v3.275c-5.244.353-9.48 4.381-10.156 9.531l1.887.576A7 7 0 0 1 11 14h2v3.5l1.63.776 8-6.5v-1.552z"
        />
      </svg>
    );
  },
);

export default ProShareForwardFill;
