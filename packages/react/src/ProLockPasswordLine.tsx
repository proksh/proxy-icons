import * as React from "react";
import { IconProps } from "./types";

export const ProLockPasswordLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 15v2h2v-2zm5.5 2h-2v-2h2zm-9 0h2v-2h-2z" />
        <path
          fill={color}
          d="M7 7a5 5 0 0 1 10 0v2h2l1 1v11l-1 1H5l-1-1V10l1-1h2zm8 0v2H9V7a3 3 0 1 1 6 0M6 20v-9h12v9z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProLockPasswordLine;
