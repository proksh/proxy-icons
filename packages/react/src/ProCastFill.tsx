import * as React from "react";
import { IconProps } from "./types";

export const ProCastFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v4q1.021 0 2 .153V5h16v14h-5.153q.152.979.153 2h6l1-1V4l-1-1z"
        />
        <path
          fill={color}
          d="M12.819 19q.18.974.181 2h-2a9 9 0 0 0-9-9v-2q1.026.001 2 .181c.691.127 1.36.32 2 .569A11.04 11.04 0 0 1 12.25 17q.377.961.569 2M18 17h-3.627A13.03 13.03 0 0 0 6 8.627V7h12z"
        />
        <path
          fill={color}
          d="M2 14a7 7 0 0 1 7 7H7a5 5 0 0 0-5-5zm0 4a3 3 0 0 1 3 3H2z"
        />
      </svg>
    );
  },
);

export default ProCastFill;
