import * as React from "react";
import { IconProps } from "./types";

export const ProSpeedMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.496 7.132 3 8v8l1.496.868 7-4v-1.736zM8.984 12 5 14.277V9.723zm4.512-4.868L12 8v8l1.496.868 7-4v-1.736zM17.984 12 14 14.277V9.723z"
        />
      </svg>
    );
  },
);

export default ProSpeedMiniLine;
