import * as React from "react";
import { IconProps } from "./types";

export const ProWaterPercentFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 .062 6.375 6.585q.095.095.188.194a9 9 0 1 1-12.937-.195zM9 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7.207-1.707 1.414 1.414 7-7-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProWaterPercentFill;
