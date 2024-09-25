import * as React from "react";
import { IconProps } from "./types";

export const ProFlickrLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M6 17A5 5 0 1 0 6 7a5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m9 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        />
      </svg>
    );
  },
);

export default ProFlickrLine;
