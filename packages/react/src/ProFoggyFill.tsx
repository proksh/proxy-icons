import * as React from "react";
import { IconProps } from "./types";

export const ProFoggyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M17.327 6.002A7.001 7.001 0 0 0 4.046 8.194 5.5 5.5 0 0 0 .022 13H24v-.5a6.5 6.5 0 0 0-6.673-6.498M4 19h17v2H4zm20-4H0v2h24z" />
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

export default ProFoggyFill;
