import * as React from "react";
import { IconProps } from "./types";

export const ProMovie2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10q.507 0 1-.05V22h7v-2h-1.999A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10m2 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
      </svg>
    );
  },
);

export default ProMovie2Fill;
