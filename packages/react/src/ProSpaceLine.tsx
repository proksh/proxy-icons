import * as React from "react";
import { IconProps } from "./types";

export const ProSpaceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M4 13V9H2v6h20V9h-2v4z" />
      </svg>
    );
  },
);

export default ProSpaceLine;
