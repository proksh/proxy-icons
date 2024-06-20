import * as React from "react";
import { IconProps } from "./types";

export const ProShapesLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.83 10.75 12.2 1l-5.629 9.75zm-3.464-2h-4.33L12.2 5zM13 17.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M3 13.5h8v8H3zm2 2v4h4v-4z"
        />
      </svg>
    );
  },
);

export default ProShapesLine;
