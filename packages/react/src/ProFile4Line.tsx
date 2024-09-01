import * as React from "react";
import { IconProps } from "./types";

export const ProFile4Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 22h12.914L21 16.914V2H3zm16-6h-4v4H5V4h14z" />
      </svg>
    );
  },
);

export default ProFile4Line;
