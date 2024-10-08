import * as React from "react";
import { IconProps } from "./types";

export const ProGlobeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 3.07A8 8 0 1 1 5.052 13.969l-1.737.993q.067.117.137.232A10 10 0 0 0 11 19.951V21H6v2h12v-2h-5v-1.05c5.053-.501 9-4.765 9-9.95a10 10 0 0 0-5-8.662z"
        />
        <path
          fill={color}
          d="M5 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0m7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
        />
      </svg>
    );
  },
);

export default ProGlobeLine;
