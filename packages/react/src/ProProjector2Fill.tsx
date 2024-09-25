import * as React from "react";
import { IconProps } from "./types";

export const ProProjector2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        <path
          fill={color}
          d="M20.659 5H22l1 1v12l-1 1v2h-2v-2H4v2H2v-2l-1-1V6l1-1h7.341A6.003 6.003 0 0 1 20.66 5M11 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0m-6 6v2h2v-2zm5 0H8v2h2z"
        />
      </svg>
    );
  },
);

export default ProProjector2Fill;
