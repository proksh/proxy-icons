import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20.207 7.707-4.5 4.5L14 11.5V8H4V6h10V2.5l1.707-.707 4.5 4.5zM10 18v3.5l-1.707.707-4.5-4.5v-1.414l4.5-4.5L10 12.5V16h10v2z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftRightFill;
