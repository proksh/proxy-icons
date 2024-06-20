import * as React from "react";
import { IconProps } from "./types";

export const ProInputMethodLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.176 7h-2.354l-4 10h2.154l.8-2h4.446l.8 2h2.154zm.246 6h-2.846L12 9.443z"
        />
        <path fill={color} d="M4 3 3 4v16l1 1h16l1-1V4l-1-1zm1 16V5h14v14z" />
      </svg>
    );
  },
);

export default ProInputMethodLine;
