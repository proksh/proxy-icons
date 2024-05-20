import * as React from "react";
import { IconProps } from "./types";

export const ProLockStarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7a5 5 0 0 1 10 0v2h2l1 1v5.372h-2V11H6v9h8.323l1.216 1.125-.174.875H5l-1-1V10l1-1h2zm8 0v2H9V7a3 3 0 1 1 6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M16.649 23.236 19 21.92l2.351 1.316-.525-2.643 1.978-1.83-2.675-.316L19 16l-1.128 2.447-2.676.317 1.978 1.83z"
        />
      </svg>
    );
  },
);

export default ProLockStarLine;
