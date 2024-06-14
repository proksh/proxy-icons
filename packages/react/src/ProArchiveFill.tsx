import * as React from "react";
import { IconProps } from "./types";

export const ProArchiveFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v5H2zm1 7h18v11H3zm12 2H9v2h6z" />
      </svg>
    );
  },
);

export default ProArchiveFill;
