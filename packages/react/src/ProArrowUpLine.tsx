import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 6.914-6.293 6.293-1.414-1.414L12 3.086l8.707 8.707-1.414 1.414L13 6.914V20.5h-2z"
        />
      </svg>
    );
  },
);

export default ProArrowUpLine;
