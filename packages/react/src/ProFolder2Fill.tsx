import * as React from "react";
import { IconProps } from "./types";

export const ProFolder2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h8.414l2 2H22v4H2zm0 8v10h20V11z" />
      </svg>
    );
  },
);

export default ProFolder2Fill;
