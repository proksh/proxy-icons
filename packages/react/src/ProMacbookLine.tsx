import * as React from "react";
import { IconProps } from "./types";

export const ProMacbookLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v13l1 1h18l1-1V4l-1-1zm1 13V5h16v11zm19 3H1v2h22z"
        />
      </svg>
    );
  },
);

export default ProMacbookLine;
