import * as React from "react";
import { IconProps } from "./types";

export const ProShareForward2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.38 2.224 12.75 3v2.306a8.696 8.696 0 0 0-7.81 7.515l1.886.576a5.15 5.15 0 0 1 4.617-2.858h1.307V13l1.63.776 6.155-5V7.224zM4 19v-5H2v6l1 1h18l1-1v-6h-2v5z"
        />
      </svg>
    );
  },
);

export default ProShareForward2Fill;
