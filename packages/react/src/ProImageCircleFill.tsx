import * as React from "react";
import { IconProps } from "./types";

export const ProImageCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="M22 12a9.96 9.96 0 0 1-1 4.364v.006l-.099.192a10 10 0 0 1-1.683 2.359 10 10 0 0 1-4.244 2.63c-.94.292-1.938.449-2.974.449a9.95 9.95 0 0 1-5.6-1.713l-.96-.642.053-.052A9.98 9.98 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10M4 12a7.98 7.98 0 0 0 2.912 6.174l8.052-8.052 4.688 4.22A8 8 0 1 0 4 12"
        />
      </svg>
    );
  },
);

export default ProImageCircleFill;
