import * as React from "react";
import { IconProps } from "./types";

export const ProTornadoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 5h20V3H2zm0 8h14v-2H2zm18-4H4V7h16zM6 17h8v-2H6zm10 4h-6v-2h6z"
        />
      </svg>
    );
  },
);

export default ProTornadoLine;
