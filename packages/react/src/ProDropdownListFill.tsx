import * as React from "react";
import { IconProps } from "./types";

export const ProDropdownListFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v6h-2V5H4v14h9v2H2z" />
        <path
          fill={color}
          d="m18.293 10.293-4 4L15 16h8l.707-1.707-4-4zm1.414 12.414 4-4L23 17h-8l-.707 1.707 4 4z"
        />
      </svg>
    );
  },
);

export default ProDropdownListFill;
