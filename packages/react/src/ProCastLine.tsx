import * as React from "react";
import { IconProps } from "./types";

export const ProCastLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v16l-1 1h-6q0-1.021-.153-2H20V5H4v3.153A13 13 0 0 0 2 8z"
        />
        <path
          fill={color}
          d="M12.819 19q.18.974.181 2h-2a9 9 0 0 0-9-9v-2q1.026.001 2 .181A11.01 11.01 0 0 1 12.819 19"
        />
        <path
          fill={color}
          d="M2 14a7 7 0 0 1 7 7H7a5 5 0 0 0-5-5zm0 4a3 3 0 0 1 3 3H2z"
        />
      </svg>
    );
  },
);

export default ProCastLine;
