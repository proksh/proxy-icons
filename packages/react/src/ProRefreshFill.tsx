import * as React from "react";
import { IconProps } from "./types";

export const ProRefreshFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m13.191-4.493a4.99 4.99 0 0 1 2.707 3.494h-.952l-.876 1.481 1.445 2.63 1.775-.043A7 7 0 0 0 7.396 6.727l1.316 1.507a5 5 0 0 1 5.48-.727M5.71 8.931a7 7 0 0 0 10.894 8.342l-1.315-1.507A5 5 0 0 1 7.102 13h.952l.876-1.481-1.445-2.63z"
        />
      </svg>
    );
  },
);

export default ProRefreshFill;
