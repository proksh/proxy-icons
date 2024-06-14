import * as React from "react";
import { IconProps } from "./types";

export const ProNodeTreeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 2H3v6h3v11l1 1h6v2h8v-6h-8v2H8v-6h5v2h8V8h-8v2H8V8h3z"
        />
      </svg>
    );
  },
);

export default ProNodeTreeFill;
