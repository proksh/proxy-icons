import * as React from "react";
import { IconProps } from "./types";

export const ProSideBarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 21V3h20v18zm8-2h10V5H10z" />
      </svg>
    );
  },
);

export default ProSideBarFill;
