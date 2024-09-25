import * as React from "react";
import { IconProps } from "./types";

export const ProSquareFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 3H3v18h18z" />
      </svg>
    );
  },
);

export default ProSquareFill;
