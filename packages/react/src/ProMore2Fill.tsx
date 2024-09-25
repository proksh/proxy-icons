import * as React from "react";
import { IconProps } from "./types";

export const ProMore2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.75 4.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0m0 7.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0m0 7.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
        />
      </svg>
    );
  },
);

export default ProMore2Fill;
