import * as React from "react";
import { IconProps } from "./types";

export const ProUserFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M8 14a5 5 0 0 0-5 5v3h18v-3a5 5 0 0 0-5-5z"
        />
      </svg>
    );
  },
);

export default ProUserFill;
