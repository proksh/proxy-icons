import * as React from "react";
import { IconProps } from "./types";

export const ProPriceTag3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
            d="m20.617 3.883 1.212 10.102L11.233 24.58-.081 13.268 10.516 2.67zm-7.264 7.263a2 2 0 1 0 2.829-2.828 2 2 0 0 0-2.829 2.829"
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

export default ProPriceTag3Fill;
