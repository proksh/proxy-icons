import * as React from "react";
import { IconProps } from "./types";

export const ProMacFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v13l-1 1h-7v2l2 1v1H8v-1l2-1v-2H3l-1-1zm18 10H4v2h16z"
        />
      </svg>
    );
  },
);

export default ProMacFill;
