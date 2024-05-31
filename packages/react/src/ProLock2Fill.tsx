import * as React from "react";
import { IconProps } from "./types";

export const ProLock2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7a5 5 0 0 1 10 0v2h3v13H4V9h3zm8 0a3 3 0 1 0-6 0v2h6zm-2 11v-4h-2v4z"
        />
      </svg>
    );
  },
);

export default ProLock2Fill;
