import * as React from "react";
import { IconProps } from "./types";

export const ProPulseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 7.886 6.908 12.42 6 13H1v-2h4.36l2.732-5.92h1.816L15 16.115l2.092-4.533L18 11h5v2h-4.36l-2.732 5.92h-1.816z"
        />
      </svg>
    );
  },
);

export default ProPulseLine;
