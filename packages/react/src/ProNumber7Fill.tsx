import * as React from "react";
import { IconProps } from "./types";

export const ProNumber7Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M19 1h1v4h-1z" />
        <path fill={color} d="M6 4.5h9.68L7.805 22h3.29L20.32 1.5H6z" />
      </svg>
    );
  },
);

export default ProNumber7Fill;
