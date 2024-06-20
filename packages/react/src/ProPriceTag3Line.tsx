import * as React from "react";
import { IconProps } from "./types";

export const ProPriceTag3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M13.352 11.147a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829" />
          <path d="M21.827 13.985 20.615 3.883 10.514 2.671-.083 13.268l11.314 11.314zm-19.082-.717 8.496-8.495 7.576.909.909 7.576-8.495 8.495z" />
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

export default ProPriceTag3Line;
