import * as React from "react";
import { IconProps } from "./types";

export const ProIndentIncreaseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 5.5h18v-2H3zm8 5h10v-2H11zm10 10H3v-2h18zm-10-5h10v-2H11zM4.707 7.793 3 8.5v7l1.707.707 3.5-3.5v-1.414z"
        />
      </svg>
    );
  },
);

export default ProIndentIncreaseFill;
