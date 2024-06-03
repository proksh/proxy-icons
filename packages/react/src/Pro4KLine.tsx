import * as React from "react";
import { IconProps } from "./types";

export const Pro4KLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.26 9h-1.77l-1.24 1.985V9h-1.5v6h1.5v-1.985L15.49 15h1.77l-1.876-3zM7.75 9h-1.5v4.25h3V15h1.5v-1.75h.75v-1.5h-.75V9h-1.5v2.75h-1.5z"
        />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default Pro4KLine;
