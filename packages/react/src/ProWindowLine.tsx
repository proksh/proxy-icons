import * as React from "react";
import { IconProps } from "./types";

export const ProWindowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 8H5V6h2zm2 0h2V6H9z" />
        <path
          fill={color}
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm17 6H4V5h16zM4 11h16v8H4z"
        />
      </svg>
    );
  },
);

export default ProWindowLine;
