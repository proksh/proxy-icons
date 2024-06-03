import * as React from "react";
import { IconProps } from "./types";

export const ProGamepadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 10a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6zm9 5v-2h2v-2h-2V9H8v2H6v2h2v2zm6-6h-2v2h2zm0 6h2v-2h-2z"
        />
      </svg>
    );
  },
);

export default ProGamepadFill;
