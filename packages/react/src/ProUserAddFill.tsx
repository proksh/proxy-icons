import * as React from "react";
import { IconProps } from "./types";

export const ProUserAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m6 15v-3h2v3h3v2h-3v3h-2v-3h-3v-2zM8 14a5 5 0 0 0-5 5v3h10v-8z"
        />
      </svg>
    );
  },
);

export default ProUserAddFill;
