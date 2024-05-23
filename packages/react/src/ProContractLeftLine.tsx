import * as React from "react";
import { IconProps } from "./types";

export const ProContractLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.793 4.793 1.414 1.414L11.414 11H20.5v2h-9.086l4.793 4.793-1.414 1.414L7.586 12zM6 5v14H3.5V5z"
        />
      </svg>
    );
  },
);

export default ProContractLeftLine;
