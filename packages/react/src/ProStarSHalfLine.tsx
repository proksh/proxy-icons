import * as React from "react";
import { IconProps } from "./types";

export const ProStarSHalfLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4.581h-.908L9.069 8.966l-4.795.569-.561 1.727 3.545 3.279-.941 4.736 1.47 1.068L12 17.986v-2.019h-.488l-2.81 1.574.627-3.16-.302-.929-2.365-2.186 3.199-.38.79-.574L12 7.388z"
        />
      </svg>
    );
  },
);

export default ProStarSHalfLine;
