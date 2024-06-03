import * as React from "react";
import { IconProps } from "./types";

export const ProRewindStartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 13.766 8.486 5.092L13 18v-4.234l8.485 5.092L23 18V6l-1.515-.857L13 10.233V6l-1.514-.857L3 10.233V5H1v14h2zm8 2.468L3.944 12 11 7.766zm10 0L13.944 12 21 7.766z"
        />
      </svg>
    );
  },
);

export default ProRewindStartLine;
