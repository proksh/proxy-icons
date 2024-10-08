import * as React from "react";
import { IconProps } from "./types";

export const ProAndroidFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.968 5.382A8.96 8.96 0 0 0 3 11v1h18v-1a8.96 8.96 0 0 0-1.968-5.618l1.675-1.675-1.414-1.414-1.675 1.675A8.96 8.96 0 0 0 12 2a8.96 8.96 0 0 0-5.618 1.968L4.707 2.293 3.293 3.707zM10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M3 22v-8h18v8z"
        />
      </svg>
    );
  },
);

export default ProAndroidFill;
