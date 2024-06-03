import * as React from "react";
import { IconProps } from "./types";

export const ProPlayFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6.493 2.63 5 3.5v17l1.493.87 15-8.5v-1.74z" />
      </svg>
    );
  },
);

export default ProPlayFill;
