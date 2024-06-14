import * as React from "react";
import { IconProps } from "./types";

export const ProNumber8Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.352 11.36a5.5 5.5 0 1 0-6.704 0C6.783 12.398 5.5 14.278 5.5 16.5c0 3.401 3.002 6 6.5 6s6.5-2.599 6.5-6c0-2.223-1.282-4.103-3.148-5.14M8.5 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5 5.5c2.577 0 4.5 1.878 4.5 4s-1.923 4-4.5 4-4.5-1.878-4.5-4 1.923-4 4.5-4"
        />
      </svg>
    );
  },
);

export default ProNumber8Line;
