import * as React from "react";
import { IconProps } from "./types";

export const ProLockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7a5 5 0 0 1 10 0v2h3v13H4V9h3zm8 0a3 3 0 1 0-6 0v2h6zm-4.5 9h.5v2h2v-2h.5v-3h-3z"
        />
      </svg>
    );
  },
);

export default ProLockFill;
