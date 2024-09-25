import * as React from "react";
import { IconProps } from "./types";

export const ProSpeedMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.496 7.132 3 8v8l1.496.868 7-4v-1.736zm9 0L12 8v8l1.496.868 7-4v-1.736z"
        />
      </svg>
    );
  },
);

export default ProSpeedMiniFill;
