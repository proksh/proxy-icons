import * as React from "react";
import { IconProps } from "./types";

export const ProBook3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h15v2H7a2 2 0 1 0 0 4h14v14zM5 9.465V19a1 1 0 0 0 1 1h13V10H7a4 4 0 0 1-2-.535"
        />
        <path fill={color} d="M7 5a1 1 0 0 0 0 2h14V5z" />
      </svg>
    );
  },
);

export default ProBook3Line;
