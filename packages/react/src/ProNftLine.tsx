import * as React from "react";
import { IconProps } from "./types";

export const ProNftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12.5-5.5L12 1 2.5 6.5v11L12 23l9.5-5.5zM12 3.311l7.5 4.342v6.88l-4.562-2.736-7.971 5.978L4.5 16.347V7.653zm0 17.378-3.152-1.825 6.214-4.66 3.998 2.398z"
        />
      </svg>
    );
  },
);

export default ProNftLine;
