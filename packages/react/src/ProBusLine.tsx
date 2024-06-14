import * as React from "react";
import { IconProps } from "./types";

export const ProBusLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6 15h4v2H6zm12 0h-4v2h4z" />
        <path
          fill={color}
          d="M4 3 3 4v4H2v4h1v7l1 1h.5v2h3v-2h9v2h3v-2h.5l1-1v-7h1V8h-1V4l-1-1zm1 9V5h14v7zm0 2h14v4H5z"
        />
      </svg>
    );
  },
);

export default ProBusLine;
