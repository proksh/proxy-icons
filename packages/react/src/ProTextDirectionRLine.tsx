import * as React from "react";
import { IconProps } from "./types";

export const ProTextDirectionRLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 15V5h2V3H9a4 4 0 1 0 0 8v4h2V5h2v10zM7 7a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2"
        />
        <path
          fill={color}
          d="M19 17H6.914l1.293-1.293-1.414-1.414L3.086 18l3.707 3.707 1.414-1.414L6.914 19H19z"
        />
      </svg>
    );
  },
);

export default ProTextDirectionRLine;
