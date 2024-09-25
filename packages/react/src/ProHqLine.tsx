import * as React from "react";
import { IconProps } from "./types";

export const ProHqLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.75 9v6h1.5v-2.25h1.5V15h1.5V9h-1.5v2.25h-1.5V9zm6 1 .75-.75h3l.75.75v4l-.75.75h-.75v1.75h-1.5v-1.75h-.75l-.75-.75zm1.5.75v2.5h1.5v-2.5z"
        />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default ProHqLine;
