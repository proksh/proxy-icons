import * as React from "react";
import { IconProps } from "./types";

export const ProSidebarUnfoldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 3h-12v18h12zM11 12l-3 2.5v-5zm5.5-9v18h5V3z"
        />
      </svg>
    );
  },
);

export default ProSidebarUnfoldFill;
