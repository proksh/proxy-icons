import * as React from "react";
import { IconProps } from "./types";

export const ProFileUserLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1.5 4.5A3.5 3.5 0 0 0 7 17h2a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 17h2a3.5 3.5 0 0 0-3.5-3.5z"
        />
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm12 2H5v16h14V8h-4z" />
      </svg>
    );
  },
);

export default ProFileUserLine;
