import * as React from "react";
import { IconProps } from "./types";

export const ProMapPin4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a8 8 0 0 0-1 15.938V21h2v-3.062A8.001 8.001 0 0 0 12 2m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0M5 24v-2h14v2z"
        />
      </svg>
    );
  },
);

export default ProMapPin4Line;
