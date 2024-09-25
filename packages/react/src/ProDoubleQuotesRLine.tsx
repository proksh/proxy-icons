import * as React from "react";
import { IconProps } from "./types";

export const ProDoubleQuotesRLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.75 10.75h2.828l-2.105 8H7.48l2.77-7.386V5.25h-5.5zm9 0h2.828l-2.105 8h2.007l2.77-7.386V5.25h-5.5z"
        />
      </svg>
    );
  },
);

export default ProDoubleQuotesRLine;
