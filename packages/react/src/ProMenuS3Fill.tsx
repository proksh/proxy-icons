import * as React from "react";
import { IconProps } from "./types";

export const ProMenuS3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 5.5h10v3H7zm0 10h10v3H7zm12-5H5v3h14z" />
      </svg>
    );
  },
);

export default ProMenuS3Fill;
