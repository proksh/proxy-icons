import * as React from "react";
import { IconProps } from "./types";

export const ProFlashlightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#a)">
          <path
            fill={color}
            d="M21.392 9 11 24.242V15H4l9-15v9zM13 13v4.394L17.263 11H11V7.61L7.766 13z"
          />
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

export default ProFlashlightLine;
