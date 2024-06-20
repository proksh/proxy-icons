import * as React from "react";
import { IconProps } from "./types";

export const ProParenthesesLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.276 3H6.769A15.93 15.93 0 0 0 4 12c0 3.337 1.022 6.436 2.77 9h2.506A13.94 13.94 0 0 1 6 12c0-3.427 1.231-6.566 3.276-9m5.448 0h2.507A15.93 15.93 0 0 1 20 12c0 3.337-1.022 6.436-2.77 9h-2.506A13.94 13.94 0 0 0 18 12c0-3.427-1.231-6.566-3.276-9"
        />
      </svg>
    );
  },
);

export default ProParenthesesLine;
