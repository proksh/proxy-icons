import * as React from "react";
import { IconProps } from "./types";

export const ProDiscFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2q.507 0 1 .05v7.12A3 3 0 1 0 15 12V2.458c4.057 1.274 7 5.064 7 9.542 0 5.523-4.477 10-10 10S2 17.523 2 12"
        />
      </svg>
    );
  },
);

export default ProDiscFill;
