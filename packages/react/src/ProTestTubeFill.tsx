import * as React from "react";
import { IconProps } from "./types";

export const ProTestTubeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2zm-7 2v5h4V4zm3.5 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 3.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
        />
      </svg>
    );
  },
);

export default ProTestTubeFill;
