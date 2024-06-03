import * as React from "react";
import { IconProps } from "./types";

export const ProComputerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 4 1-1h18l1 1v13l-1 1h-8v2h4v2H7v-2h4v-2H3l-1-1zm2 1v11h16V5z"
        />
      </svg>
    );
  },
);

export default ProComputerLine;
