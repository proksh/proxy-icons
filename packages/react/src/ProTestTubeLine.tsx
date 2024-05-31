import * as React from "react";
import { IconProps } from "./types";

export const ProTestTubeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
        <path
          fill={color}
          d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2zm-7 9v7a2 2 0 1 0 4 0v-7zm4-2V4h-4v5z"
        />
      </svg>
    );
  },
);

export default ProTestTubeLine;
