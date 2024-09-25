import * as React from "react";
import { IconProps } from "./types";

export const ProSkipBackMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 7v10H6V7zm10 1-1.496-.868-7 4v1.736l7 4L18 16z"
        />
      </svg>
    );
  },
);

export default ProSkipBackMiniFill;
