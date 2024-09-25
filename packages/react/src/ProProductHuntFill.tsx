import * as React from "react";
import { IconProps } from "./types";

export const ProProductHuntFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m1.334-10H10.5V9h2.834a1.5 1.5 0 0 1 0 3m0-5H8.5v10h2v-3h2.834a3.5 3.5 0 1 0 0-7"
        />
      </svg>
    );
  },
);

export default ProProductHuntFill;
