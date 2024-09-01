import * as React from "react";
import { IconProps } from "./types";

export const ProFileLockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12.75 11.25V12h-1.5v-.75a.75.75 0 0 1 1.5 0" />
        <path
          fill={color}
          d="M3 2h12.914L21 7.086V22H3zm6.25 9.25V12H8.5v4.5h7V12h-.75v-.75a2.75 2.75 0 1 0-5.5 0"
        />
      </svg>
    );
  },
);

export default ProFileLockFill;
