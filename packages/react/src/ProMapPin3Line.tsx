import * as React from "react";
import { IconProps } from "./types";

export const ProMapPin3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a9 9 0 0 0-1 17.945V24h2v-4.055A9.001 9.001 0 0 0 12 2m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        />
      </svg>
    );
  },
);

export default ProMapPin3Line;
