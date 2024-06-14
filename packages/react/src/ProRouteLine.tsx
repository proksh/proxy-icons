import * as React from "react";
import { IconProps } from "./types";

export const ProRouteLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 3a3 3 0 0 0-1 5.83V17a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v9.546L2.76 15.1l-1.52 1.301L5 20.787 8.76 16.4l-1.52-1.301L6 16.547V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V8.83A3.001 3.001 0 0 0 19 3m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        />
      </svg>
    );
  },
);

export default ProRouteLine;
