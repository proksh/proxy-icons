import * as React from "react";
import { IconProps } from "./types";

export const ProFolderLockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12.75 11.25V12h-1.5v-.75a.75.75 0 0 1 1.5 0" />
        <path
          fill={color}
          d="M2 3h8.414l2 2H22v16H2zm7.25 8.25V12H8.5v4.5h7V12h-.75v-.75a2.75 2.75 0 1 0-5.5 0"
        />
      </svg>
    );
  },
);

export default ProFolderLockFill;
