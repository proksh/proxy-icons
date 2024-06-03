import * as React from "react";
import { IconProps } from "./types";

export const ProSkipBackMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 7v10H6V7zm8.504.132L18 8v8l-1.496.868-7-4v-1.736zM12.016 12 16 14.277V9.723z"
        />
      </svg>
    );
  },
);

export default ProSkipBackMiniLine;
