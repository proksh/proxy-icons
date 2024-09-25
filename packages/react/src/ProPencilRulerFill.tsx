import * as React from "react";
import { IconProps } from "./types";

export const ProPencilRulerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 6.63 7 1.963 3 6.63V22h8zM5 20v-2h4v2zM21 4h-8v18h8v-4h-4v-2h4v-2h-5v-2h5v-2h-4V8h4z"
        />
      </svg>
    );
  },
);

export default ProPencilRulerFill;
