import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpDoubleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.207 18.457 12 13.664l4.793 4.793 1.414-1.414L12 10.836l-6.207 6.207z"
        />
        <path
          fill={color}
          d="M7.207 12.457 12 7.664l4.793 4.793 1.414-1.414L12 4.836l-6.207 6.207z"
        />
      </svg>
    );
  },
);

export default ProArrowUpDoubleLine;
