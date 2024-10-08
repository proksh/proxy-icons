import * as React from "react";
import { IconProps } from "./types";

export const ProCornerDownLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 5v7H6.914l3.793-3.793-1.414-1.414L3.086 13l6.207 6.207 1.414-1.414L6.914 14H19V5z"
        />
      </svg>
    );
  },
);

export default ProCornerDownLeftLine;
