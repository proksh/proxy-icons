import * as React from "react";
import { IconProps } from "./types";

export const ProMenuS4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 5.5h10v3H9zm-4 10h10v3H5zm14-5H5v3h14z" />
      </svg>
    );
  },
);

export default ProMenuS4Fill;
