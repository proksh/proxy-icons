import * as React from "react";
import { IconProps } from "./types";

export const ProPuzzleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 5a4 4 0 1 1 8 0h4v4a4 4 0 0 1 0 8v4H3V5zm4-2a2 2 0 0 0-1.886 2.667L9.584 7H5v12h12v-4.585l1.333.472q.313.111.667.113a2 2 0 1 0-.667-3.886l-1.333.47V7h-4.585l.472-1.333Q12.998 5.355 13 5a2 2 0 0 0-2-2"
        />
      </svg>
    );
  },
);

export default ProPuzzleLine;
