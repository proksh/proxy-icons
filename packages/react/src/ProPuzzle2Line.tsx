import * as React from "react";
import { IconProps } from "./types";

export const ProPuzzle2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 5a4 4 0 1 1 8 0h6v6.585l-1.333-.472a2 2 0 1 0 0 3.773l1.333-.47V21H3V5zm4-2a2 2 0 0 0-1.886 2.667L9.584 7H5v12h14v-2a4 4 0 0 1 0-8V7h-6.585l.472-1.333Q12.998 5.355 13 5a2 2 0 0 0-2-2"
        />
      </svg>
    );
  },
);

export default ProPuzzle2Line;
