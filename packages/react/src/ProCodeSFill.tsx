import * as React from "react";
import { IconProps } from "./types";

export const ProCodeSFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M8.06 8.06 5.94 5.94-.121 12l6.06 6.06 2.122-2.12L4.12 12zm7.88 0 2.12-2.12L24.121 12l-6.06 6.06-2.122-2.12L19.88 12z" />
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

export default ProCodeSFill;
