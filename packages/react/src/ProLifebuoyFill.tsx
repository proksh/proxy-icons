import * as React from "react";
import { IconProps } from "./types";

export const ProLifebuoyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m2.902-3.694 2.66 1.387a5 5 0 0 1 2.132-2.132L8.305 4.903a8.04 8.04 0 0 0-3.404 3.404M12 17a5 5 0 0 1-4.438-2.693l-2.66 1.387a8.04 8.04 0 0 0 3.404 3.404l1.387-2.66A4.96 4.96 0 0 0 12 17m5-5a5 5 0 0 1-2.693 4.438l1.387 2.66a8.04 8.04 0 0 0 3.404-3.404l-2.66-1.387A4.96 4.96 0 0 0 17 12m0 0c0-.84-.204-1.62-.562-2.307l2.66-1.387a8.04 8.04 0 0 0-3.404-3.404l-1.387 2.66A5 5 0 0 1 17 12m-8 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
        />
      </svg>
    );
  },
);

export default ProLifebuoyFill;
