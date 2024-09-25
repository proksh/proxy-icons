import * as React from "react";
import { IconProps } from "./types";

export const ProFindReplaceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 2a8.5 8.5 0 1 0 5.027 15.355l5.059 5.06L22 21l-5.01-5.01A8.5 8.5 0 0 0 10.5 2m-4.001 8.499-2 .002a5.997 5.997 0 0 1 9-5.197 5.98 5.98 0 0 1 2.769 3.543l-4.768-.08 1-1.731a3.997 3.997 0 0 0-6 3.463m1 5.197a5.98 5.98 0 0 1-2.767-3.543l4.768.079-1 1.732a4 4 0 0 0 6-3.463l2-.002a6 6 0 0 1-9 5.197"
        />
      </svg>
    );
  },
);

export default ProFindReplaceFill;
