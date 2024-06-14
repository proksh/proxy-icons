import * as React from "react";
import { IconProps } from "./types";

export const ProCarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M7.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="M18.64 4 22 11.28V22h-3v-2H5v2H2V11.28L5.36 4zm1.028 7L17.36 6H6.64l-2.308 5zM4 13v5h16v-5z"
        />
      </svg>
    );
  },
);

export default ProCarLine;
