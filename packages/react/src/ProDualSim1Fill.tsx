import * as React from "react";
import { IconProps } from "./types";

export const ProDualSim1Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.207 2.293 14.5 2H5L4 3v18l1 1h14l1-1V7.5l-.293-.707zM10 11V9h2l1 1v7h-2v-6z"
        />
      </svg>
    );
  },
);

export default ProDualSim1Fill;
