import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpSmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 8.914-4.293 4.293-1.414-1.414L12 5.086l6.707 6.707-1.414 1.414L13 8.914V18.5h-2z"
        />
      </svg>
    );
  },
);

export default ProArrowUpSmLine;
