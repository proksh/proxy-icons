import * as React from "react";
import { IconProps } from "./types";

export const ProShare2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.12 17.023A4 4 0 0 0 13 18c0 .648.154 1.26.427 1.8a4.02 4.02 0 0 0 2.016 1.886A4 4 0 0 0 17 22c.668 0 1.297-.164 1.85-.453a4 4 0 0 0 1.836-1.99A4 4 0 0 0 21 18c0-.686-.173-1.331-.477-1.896a4 4 0 0 0-1.966-1.79A4 4 0 0 0 17 14a3.98 3.98 0 0 0-2.921 1.268l-4.2-2.29a4 4 0 0 0 .006-1.932l-.005-.023 4.199-2.29q.205.219.441.406A4 4 0 1 0 17.013 2H17a4 4 0 0 0-3.88 4.977l-4.199 2.29A3.98 3.98 0 0 0 6 8a4 4 0 1 0 2.921 6.733zM6 14a2.007 2.007 0 0 1-2-2 1.99 1.99 0 0 1 .882-1.658A2 2 0 0 1 6 10a2.007 2.007 0 0 1 2 2 1.99 1.99 0 0 1-.882 1.658A2 2 0 0 1 6 14m11-6a2 2 0 0 1-1.601-.802A2 2 0 0 1 15 6a1.99 1.99 0 0 1 1.007-1.737A2 2 0 1 1 17 8m0 12a1.99 1.99 0 0 1-1.658-.882 1.99 1.99 0 0 1-.22-1.808A2 2 0 0 1 17 16a1.998 1.998 0 0 1 1.653 3.126A1.99 1.99 0 0 1 17 20"
        />
      </svg>
    );
  },
);

export default ProShare2Line;
