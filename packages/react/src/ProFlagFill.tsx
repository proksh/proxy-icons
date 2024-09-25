import * as React from "react";
import { IconProps } from "./types";

export const ProFlagFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4 3 3 4v18h2v-6h6.882l1 2H21V5h-6.882l-1-2z" />
      </svg>
    );
  },
);

export default ProFlagFill;
