import * as React from "react";
import { IconProps } from "./types";

export const ProNotification2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 10a8 8 0 1 1 16 0v8h2v2h-6a4 4 0 0 1-8 0H2v-2h2zm6 10a2 2 0 1 0 4 0z"
        />
      </svg>
    );
  },
);

export default ProNotification2Fill;
