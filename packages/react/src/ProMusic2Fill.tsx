import * as React from "react";
import { IconProps } from "./types";

export const ProMusic2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 3H7v10.535A4 4 0 1 0 9 17V6h9v7.535A4 4 0 1 0 20 17z"
        />
      </svg>
    );
  },
);

export default ProMusic2Fill;
