import * as React from "react";
import { IconProps } from "./types";

export const ProCodeSSlashFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16.505 4h-3.192L7.494 20h3.193z" />
        <path fill={color} d="M16.505 4h-3.192L7.494 20h3.193z" />
        <path
          fill={color}
          d="M16.505 4h-3.192L7.494 20h3.193zM6.379 5.94 8.5 8.06 4.561 12l3.94 3.94-2.122 2.12L.319 12z"
        />
        <path
          fill={color}
          d="M6.379 5.94 8.5 8.06 4.561 12l3.94 3.94-2.122 2.12L.319 12z"
        />
        <path
          fill={color}
          d="M6.379 5.94 8.5 8.06 4.561 12l3.94 3.94-2.122 2.12L.319 12zm11.242 0L15.5 8.06 19.44 12l-3.94 3.94 2.121 2.12L23.682 12z"
        />
        <path
          fill={color}
          d="M17.621 5.94 15.5 8.06 19.44 12l-3.94 3.94 2.121 2.12L23.682 12z"
        />
        <path
          fill={color}
          d="M17.621 5.94 15.5 8.06 19.44 12l-3.94 3.94 2.121 2.12L23.682 12z"
        />
      </svg>
    );
  },
);

export default ProCodeSSlashFill;
