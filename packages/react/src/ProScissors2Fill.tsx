import * as React from "react";
import { IconProps } from "./types";

export const ProScissors2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.121 12.5 5.318-5.318a3 3 0 0 0 0-4.243L12 10.38 4.56 2.94a3 3 0 0 0 0 4.243L9.88 12.5 7.9 14.479a4 4 0 1 0 1.918 2.325l2.183-2.183 2.182 2.182A4 4 0 1 0 16.1 14.48zM4 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0m12 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
      </svg>
    );
  },
);

export default ProScissors2Fill;
