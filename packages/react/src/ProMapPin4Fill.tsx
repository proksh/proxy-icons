import * as React from "react";
import { IconProps } from "./types";

export const ProMapPin4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a8 8 0 0 0-1 15.938V21h2v-3.062A8.001 8.001 0 0 0 12 2M5 22v2h14v-2z"
        />
      </svg>
    );
  },
);

export default ProMapPin4Fill;
