import * as React from "react";
import { IconProps } from "./types";

export const ProNumber0Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 8a7 7 0 0 1 14 0v8a7 7 0 1 1-14 0zm7-4a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4"
        />
      </svg>
    );
  },
);

export default ProNumber0Fill;
