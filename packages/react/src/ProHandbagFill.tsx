import * as React from "react";
import { IconProps } from "./types";

export const ProHandbagFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a7 7 0 0 1 7 7h1l.996.91 1 11L21 22H3l-.996-1.09 1-11L4 9h1a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5m2 11v-2h-4v2z"
        />
      </svg>
    );
  },
);

export default ProHandbagFill;
