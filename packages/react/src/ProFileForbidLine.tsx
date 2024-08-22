import * as React from "react";
import { IconProps } from "./types";

export const ProFileForbidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V11.5h-2V8h-4V4H5v16h7v2H3z"
        />
        <path
          fill={color}
          d="M13 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 0 0-2.708 4.294l4.002-4.002A3 3 0 0 0 18 15m2.708 1.707-4.001 4a3 3 0 0 0 4.001-4.001"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileForbidLine;
