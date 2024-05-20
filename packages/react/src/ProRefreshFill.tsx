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
          d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m13.191-4.493a5 5 0 0 0-5.48.727L7.398 6.727a7 7 0 0 1 10.893 8.342l-1.775.043-1.445-2.63.876-1.481h.952a4.99 4.99 0 0 0-2.707-3.494M5.71 8.931l1.775-.043 1.445 2.63-.876 1.481h-.952a5 5 0 0 0 8.187 2.767l1.314 1.508A7 7 0 0 1 5.71 8.93"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProRefreshFill;
