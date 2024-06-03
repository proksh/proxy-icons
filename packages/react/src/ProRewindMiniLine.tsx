import * as React from "react";
import { IconProps } from "./types";

export const ProRewindMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.504 7.132 12 8v8l-1.496.868-7-4v-1.736zM6.016 12 10 14.277V9.723zm13.488-4.868L21 8v8l-1.496.868-7-4v-1.736zM15.016 12 19 14.277V9.723z"
        />
      </svg>
    );
  },
);

export default ProRewindMiniLine;
