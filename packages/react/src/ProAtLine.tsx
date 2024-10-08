import * as React from "react";
import { IconProps } from "./types";

export const ProAtLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 12a8 8 0 1 1 16 0v1.5a1.5 1.5 0 0 1-3 0V8h-2a5 5 0 1 0 .603 7.466A3.5 3.5 0 0 0 22 13.5V12c.001-5.523-4.476-10-9.999-10S2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 6.112-2.084l-1.224-1.583A8 8 0 0 1 4 12m11 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        />
      </svg>
    );
  },
);

export default ProAtLine;
