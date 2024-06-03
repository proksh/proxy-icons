import * as React from "react";
import { IconProps } from "./types";

export const ProRemoteControlLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a10 10 0 0 1 8.946 5.527l-1.789.895a8.001 8.001 0 0 0-14.431.244l-1.819-.834A10 10 0 0 1 12 2"
        />
        <path
          fill={color}
          d="M12 6a6 6 0 0 1 5.368 3.316l-1.79.895a4 4 0 0 0-7.215.122l-1.819-.834A6 6 0 0 1 12 6m-6 7 1-1h10l1 1v9h-2v-8H8v8H6z"
        />
        <path fill={color} d="M10 18v-2h2v2z" />
      </svg>
    );
  },
);

export default ProRemoteControlLine;
