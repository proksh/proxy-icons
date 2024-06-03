import * as React from "react";
import { IconProps } from "./types";

export const ProCalculatorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 3 1-1h16l1 1v18l-1 1H4l-1-1zm4 3v4h10V6zm0 6v2h2v-2zm4 0v2h2v-2zm4 6h2v-6h-2zm-4-2v2h2v-2zm-4 0v2h2v-2z"
        />
      </svg>
    );
  },
);

export default ProCalculatorFill;
