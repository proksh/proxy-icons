import * as React from "react";
import { IconProps } from "./types";

export const ProPlayList2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.6 3.2 2 4v9l1.6.8 6-4.5V7.7zm3.733 5.3L4 11V6zM12 6h10V4H12zm0 7h10v-2H12zM2 20v-2h20v2z"
        />
      </svg>
    );
  },
);

export default ProPlayList2Line;
