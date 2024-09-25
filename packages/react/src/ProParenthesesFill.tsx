import * as React from "react";
import { IconProps } from "./types";

export const ProParenthesesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.938 3h-3.77A16.4 16.4 0 0 0 3.5 12c0 3.32.98 6.412 2.668 9h3.77A13.45 13.45 0 0 1 6.5 12c0-3.458 1.3-6.612 3.438-9m4.125 0h3.769a16.4 16.4 0 0 1 2.668 9c0 3.32-.98 6.412-2.668 9h-3.77a13.45 13.45 0 0 0 3.438-9c0-3.458-1.3-6.612-3.437-9"
        />
      </svg>
    );
  },
);

export default ProParenthesesFill;
