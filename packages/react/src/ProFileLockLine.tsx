import * as React from "react";
import { IconProps } from "./types";

export const ProFileLockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.75 12h.75v4.5h-7V12h.75v-.75a2.75 2.75 0 1 1 5.5 0zm-2 0v-.75a.75.75 0 0 0-1.5 0V12z"
          fillRule="evenodd"
          clipRule="evenodd"
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

export default ProFileLockLine;
