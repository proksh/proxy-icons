import * as React from "react";
import { IconProps } from "./types";

export const ProNumber0Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 8a6.5 6.5 0 0 1 13 0v8a6.5 6.5 0 0 1-13 0zM12 3.5A4.5 4.5 0 0 0 7.5 8v8a4.5 4.5 0 1 0 9 0V8A4.5 4.5 0 0 0 12 3.5"
        />
      </svg>
    );
  },
);

export default ProNumber0Line;
