import * as React from "react";
import { IconProps } from "./types";

export const ProAttachment2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
            d="M11.159 2.88a5.75 5.75 0 0 1 8.132 8.133l-5.657 5.656a3.75 3.75 0 1 1-5.303-5.303l5.48-5.48 2.121 2.121-5.48 5.48a.75.75 0 1 0 1.06 1.061l5.657-5.657a2.75 2.75 0 1 0-3.889-3.889l-6.364 6.364a4.75 4.75 0 1 0 6.718 6.718l8.308-8.309 2.122 2.121-8.309 8.309a7.75 7.75 0 0 1-10.96-10.96z"
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

export default ProAttachment2Fill;
