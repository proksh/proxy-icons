import * as React from "react";
import { IconProps } from "./types";

export const ProExpandHeightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 4H6V2h12zM7.293 14.707l1.414-1.414L11 15.586V8.414l-2.293 2.293-1.414-1.414L12 4.586l4.707 4.707-1.414 1.414L13 8.414v7.172l2.293-2.293 1.414 1.414L12 19.414zM6 22h12v-2H6z"
        />
      </svg>
    );
  },
);

export default ProExpandHeightLine;
