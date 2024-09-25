import * as React from "react";
import { IconProps } from "./types";

export const ProNotification3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 10a8 8 0 1 1 16 0v7h2v2H2v-2h2zm2 7h12v-7a6 6 0 0 0-12 0zm9 4v2H9v-2z"
        />
      </svg>
    );
  },
);

export default ProNotification3Line;
