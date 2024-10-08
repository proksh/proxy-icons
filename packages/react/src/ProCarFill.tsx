import * as React from "react";
import { IconProps } from "./types";

export const ProCarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.36 4 2 11.28V22h3v-2h14v2h3V11.28L18.64 4zm12 2 2.308 5H4.332L6.64 6zM9 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    );
  },
);

export default ProCarFill;
