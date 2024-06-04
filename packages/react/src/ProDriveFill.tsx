import * as React from "react";
import { IconProps } from "./types";

export const ProDriveFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.94 4.146 3.482 6.03-5.94 10.293L2 14.44zm2.176 10.294H22l-3.482 6.029H6.635zm4.343-1L8.518 3.145h6.964l5.94 10.295z"
        />
      </svg>
    );
  },
);

export default ProDriveFill;
