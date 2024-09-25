import * as React from "react";
import { IconProps } from "./types";

export const ProTornadoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 5.5h20v-3H2zm0 8h14v-3H2zm18-4H4v-3h16zm-14 8h8v-3H6zm10 4h-6v-3h6z"
        />
      </svg>
    );
  },
);

export default ProTornadoFill;
