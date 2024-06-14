import * as React from "react";
import { IconProps } from "./types";

export const ProDoubleQuotesLFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 19.5H4v-7l3-8h3.5l-2.105 8H11zm9 0h-7v-7l3-8h3.5l-2.105 8H20z"
        />
      </svg>
    );
  },
);

export default ProDoubleQuotesLFill;
