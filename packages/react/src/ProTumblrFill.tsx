import * as React from "react";
import { IconProps } from "./types";

export const ProTumblrFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.27 7.63A5.76 5.76 0 0 0 10.817 2h3.03v5.152h3.637v3.636h-3.637v5.454c0 .515.198 1.207.91 1.667q.711.46 3.03.455V22h-4.243a4.546 4.546 0 0 1-4.545-4.546v-6.666H6.27z"
        />
      </svg>
    );
  },
);

export default ProTumblrFill;
