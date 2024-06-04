import * as React from "react";
import { IconProps } from "./types";

export const ProFlickrFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0m12 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
        />
      </svg>
    );
  },
);

export default ProFlickrFill;
