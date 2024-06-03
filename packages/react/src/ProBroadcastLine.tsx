import * as React from "react";
import { IconProps } from "./types";

export const ProBroadcastLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.5 9.5a9.47 9.47 0 0 1 2.782-6.718l1.415 1.415A7.48 7.48 0 0 0 4.5 9.5c0 2.137.894 4.065 2.328 5.431l-1.38 1.448A9.47 9.47 0 0 1 2.5 9.5"
        />
        <path
          fill={color}
          d="M6.5 9.5a5.5 5.5 0 0 1 1.61-3.89l1.415 1.415A3.5 3.5 0 0 0 8.5 9.5a3.5 3.5 0 0 0 1.086 2.534l-1.38 1.449A5.48 5.48 0 0 1 6.5 9.5m15 0a9.47 9.47 0 0 1-2.948 6.88l-1.38-1.449A7.48 7.48 0 0 0 19.5 9.5c0-2.071-.84-3.946-2.197-5.303l1.414-1.415A9.47 9.47 0 0 1 21.5 9.5"
        />
        <path
          fill={color}
          d="M17.5 9.5a5.48 5.48 0 0 1-1.707 3.983l-1.38-1.449A3.5 3.5 0 0 0 15.5 9.5a3.5 3.5 0 0 0-1.025-2.475l1.414-1.414a5.48 5.48 0 0 1 1.61 3.889m-3.999 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 14v8h2v-8z"
        />
      </svg>
    );
  },
);

export default ProBroadcastLine;
