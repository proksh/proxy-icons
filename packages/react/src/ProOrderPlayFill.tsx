import * as React from "react";
import { IconProps } from "./types";

export const ProOrderPlayFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5 3.5V0L22 3.5v3H2v-3zM2 13.5h20v-3H2zm20 7H2v-3h20z"
        />
      </svg>
    );
  },
);

export default ProOrderPlayFill;
