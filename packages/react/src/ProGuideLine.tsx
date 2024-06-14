import * as React from "react";
import { IconProps } from "./types";

export const ProGuideLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.35 3.76 17.797 5H14a3 3 0 0 0-3 3v8a1 1 0 0 1-1 1H7.83a3.001 3.001 0 1 0 0 2H10a3 3 0 0 0 3-3V8a1 1 0 0 1 1-1h3.797L16.35 8.24l1.301 1.52L22.037 6l-4.386-3.76zM4 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        />
      </svg>
    );
  },
);

export default ProGuideLine;
