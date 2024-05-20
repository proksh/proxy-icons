import * as React from "react";
import { IconProps } from "./types";

export const ProStarSHalfFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.092 4.581 9.069 8.966l-4.795.569-.561 1.727 3.545 3.279-.941 4.736 1.47 1.068L12 17.986l4.214 2.359 1.47-1.068-.942-4.736 3.546-3.279-.562-1.727-4.795-.569-2.023-4.385zM12 15.967h.489l2.81 1.574-.628-3.16.302-.929 2.365-2.186-3.199-.38-.79-.574L12 7.388z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProStarSHalfFill;