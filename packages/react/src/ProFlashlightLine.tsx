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
            d="M21 9h.392L11 24.242V15H4l9-15v9zm-8 4H7.766L11 7.61V11h6.263L13 17.394z"
            fillRule="evenodd"
            clipRule="evenodd"
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
