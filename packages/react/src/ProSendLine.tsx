import * as React from "react";
import { IconProps } from "./types";

export const ProSendLine = React.forwardRef<SVGSVGElement, IconProps>(
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
            d="m1.71 8.33-.14 1.876 8.789 3.94 1.116-.206 3.586-3.586-1.414-1.415-3.1 3.1L4.91 9.51l13.305-3.725-3.722 13.29-1.639-3.687-1.515 1.515 2.454 5.523 1.877-.136 4.95-17.678-1.233-1.233z"
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

export default ProSendLine;
