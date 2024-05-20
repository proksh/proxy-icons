import * as React from "react";
import { IconProps } from "./types";

export const ProUserForbidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0m4 11a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3c.463 0 .902.105 1.293.292l-4 4.001A3 3 0 0 1 18 15m2.708 1.707-4.001 4a3 3 0 0 0 4.001-4.001"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M11.814 16a6.5 6.5 0 0 1 1.062-2H8a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3z"
        />
      </svg>
    );
  },
);

export default ProUserForbidLine;