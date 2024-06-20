import * as React from "react";
import { IconProps } from "./types";

export const ProTableFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5 21H22V10h-5.5zm-2 0V10h-5v11zm-7 0V10H2v11zM2 8V3h20v5z"
        />
      </svg>
    );
  },
);

export default ProTableFill;
