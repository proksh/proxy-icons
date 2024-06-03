import * as React from "react";
import { IconProps } from "./types";

export const ProRewindMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.504 7.132 12 8v8l-1.496.868-7-4v-1.736zm9 0L21 8v8l-1.496.868-7-4v-1.736z"
        />
      </svg>
    );
  },
);

export default ProRewindMiniFill;
