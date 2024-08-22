import * as React from "react";
import { IconProps } from "./types";

export const ProFolder4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h8.414l2 2H22v4H6v12H2z" />
        <path fill={color} d="M8 21h14V11H8z" />
      </svg>
    );
  },
);

export default ProFolder4Fill;
