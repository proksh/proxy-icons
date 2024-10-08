import * as React from "react";
import { IconProps } from "./types";

export const ProNodeTreeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h8v6H8v2h5V8h8v6h-8v-2H8v6h5v-2h8v6h-8v-2H7l-1-1V8H3zm2 2v2h4V4zm10 6v2h4v-2zm4 10v-2h-4v2z"
        />
      </svg>
    );
  },
);

export default ProNodeTreeLine;
