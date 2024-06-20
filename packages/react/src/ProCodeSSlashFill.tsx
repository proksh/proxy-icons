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
        <g fill={color} clipPath="url(#a)">
          <path d="M16.505 4h-3.193L7.494 20h3.192z" />
          <path d="M16.505 4h-3.193L7.494 20h3.192z" />
          <path d="M16.505 4h-3.193L7.494 20h3.192zM5.94 5.94l2.12 2.12L4.123 12l3.939 3.94-2.121 2.12L-.121 12z" />
          <path d="m5.94 5.94 2.12 2.12L4.123 12l3.939 3.94-2.121 2.12L-.121 12z" />
          <path d="m5.94 5.94 2.12 2.12L4.123 12l3.939 3.94-2.121 2.12L-.121 12zm12.12 0-2.12 2.12L19.877 12l-3.939 3.94 2.121 2.12L24.121 12z" />
          <path d="m18.06 5.94-2.12 2.12L19.877 12l-3.939 3.94 2.121 2.12L24.121 12z" />
          <path d="m18.06 5.94-2.12 2.12L19.877 12l-3.939 3.94 2.121 2.12L24.121 12z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={color} d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ProCodeSSlashFill;
