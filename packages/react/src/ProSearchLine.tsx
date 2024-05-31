import * as React from "react";
import { IconProps } from "./types";

export const ProSearchLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 2a8.5 8.5 0 1 0 5.027 15.355l5.059 5.06L22 21l-5.01-5.01A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
        />
      </svg>
    );
  },
);

export default ProSearchLine;
