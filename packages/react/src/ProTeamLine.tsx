import * as React from "react";
import { IconProps } from "./types";

export const ProTeamLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M5 10.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M2 17.5a3.5 3.5 0 0 1 4.31-3.406A6 6 0 0 0 6 16v.085A1.5 1.5 0 0 0 4 17.5V22H2zM18.5 16q-.264.001-.5.085V16c0-.666-.109-1.307-.31-1.906q.39-.093.81-.094a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.5-1.5"
        />
        <path
          fill={color}
          d="M16 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M12 11a5 5 0 0 0-5 5v6h2v-6a3 3 0 1 1 6 0v6h2v-6a5 5 0 0 0-5-5"
        />
      </svg>
    );
  },
);

export default ProTeamLine;
