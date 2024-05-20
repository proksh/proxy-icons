import * as React from "react";
import { IconProps } from "./types";

export const ProTeamFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m10.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-13 6A3.5 3.5 0 0 0 2 17.5V22h4v-6c0-.666.109-1.307.31-1.906A3.5 3.5 0 0 0 5.5 14M22 22h-4v-6c0-.666-.109-1.307-.31-1.906q.39-.093.81-.094a3.5 3.5 0 0 1 3.5 3.5zM5.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m6.5 3a5 5 0 0 0-5 5v6h10v-6a5 5 0 0 0-5-5"
        />
      </svg>
    );
  },
);

export default ProTeamFill;
