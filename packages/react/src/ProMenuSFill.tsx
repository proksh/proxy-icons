import * as React from "react";
import { IconProps } from "./types";

export const ProMenuSFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path fill={color} d="M5 5.5h14v3H5zm0 10h14v3H5zm14-5H5v3h14z" />
      </svg>
    );
  },
);

export default ProMenuSFill;
