import * as React from "react";
import { IconProps } from "./types";

export const ProMusic2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3h13v14a4 4 0 1 1-2-3.465V5H9v12a4 4 0 1 1-2-3.465zm11 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0M5 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </svg>
    );
  },
);

export default ProMusic2Line;
