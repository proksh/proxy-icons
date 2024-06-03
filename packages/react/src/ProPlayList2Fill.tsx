import * as React from "react";
import { IconProps } from "./types";

export const ProPlayList2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.6 3.2 2 4v9l1.6.8 6-4.5V7.7zM22 6.5H12v-3h10zm0 7H12v-3h10zm-20 4v3h20v-3z"
        />
      </svg>
    );
  },
);

export default ProPlayList2Fill;
