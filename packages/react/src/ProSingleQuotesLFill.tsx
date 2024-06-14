import * as React from "react";
import { IconProps } from "./types";

export const ProSingleQuotesLFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8.5 19.5h7v-7h-2.605L15 4.5h-3.5l-3 8z" />
      </svg>
    );
  },
);

export default ProSingleQuotesLFill;
