import * as React from "react";
import { IconProps } from "./types";

export const ProRecordMailFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.257 15a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2zM5.5 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        />
        <path
          fill={color}
          d="M9.743 15h4.514A5.5 5.5 0 1 1 19 16.978V17H6v-.022A5.5 5.5 0 1 1 9.743 15M5.5 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        />
      </svg>
    );
  },
);

export default ProRecordMailFill;
