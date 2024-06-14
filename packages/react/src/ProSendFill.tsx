import * as React from "react";
import { IconProps } from "./types";

export const ProSendFill = React.forwardRef<SVGSVGElement, IconProps>(
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
            d="m1.57 10.206.139-1.876 17.677-4.95 1.233 1.233-4.95 17.678-1.875.139-3.346-7.464 4.258-4.259-1.414-1.414-4.259 4.258z"
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

export default ProSendFill;
