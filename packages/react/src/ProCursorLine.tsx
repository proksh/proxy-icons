import * as React from "react";
import { IconProps } from "./types";

export const ProCursorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.39 1.863 13.173 10.073-5.268.965 3.092 6.629-4.532 2.113-3.091-6.629-4.125 3.415zM8.841 14.01l2.642-2.186 3.34 7.162.906-.422-3.34-7.163 3.373-.618-6.547-5.006z"
        />
      </svg>
    );
  },
);

export default ProCursorLine;
