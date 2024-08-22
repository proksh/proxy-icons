import * as React from "react";
import { IconProps } from "./types";

export const ProFolder3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h8.414l2 2H2zm0 4v14h20V7z" />
      </svg>
    );
  },
);

export default ProFolder3Fill;
