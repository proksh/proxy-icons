import * as React from "react";
import { IconProps } from "./types";

export const ProClockwiseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 8v2.586l-1.793-1.793-1.414 1.414L19 14.414l4.207-4.207-1.414-1.414L20 10.586V8a5 5 0 0 0-5-5h-4v2h4a3 3 0 0 1 3 3m-4 12-1 1H3l-1-1V10l1-1h10l1 1zM4 19h8v-8H4z"
        />
      </svg>
    );
  },
);

export default ProClockwiseLine;
