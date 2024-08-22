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
          d="M9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M10.5 13.5A3.5 3.5 0 0 0 7 17h2a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 17h2a3.5 3.5 0 0 0-3.5-3.5z"
        />
        <path
          fill={color}
          d="M3 2h12.914L21 7.086V22H3zm12 2v4h4v12H5V4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileUserLine;
