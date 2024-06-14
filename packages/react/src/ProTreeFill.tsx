import * as React from "react";
import { IconProps } from "./types";

export const ProTreeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 7a6 6 0 1 1 11.95.775A6 6 0 0 1 15 19h-2v3h-2v-3H9A6 6 0 0 1 6.05 7.775 6 6 0 0 1 6 7"
        />
      </svg>
    );
  },
);

export default ProTreeFill;
