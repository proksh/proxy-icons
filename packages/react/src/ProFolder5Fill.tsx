import * as React from "react";
import { IconProps } from "./types";

export const ProFolder5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.414 3H3v4h18V5h-7.586zm10.691 6-1.2 12H3.095l-1.2-12z"
        />
      </svg>
    );
  },
);

export default ProFolder5Fill;
