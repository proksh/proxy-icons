import * as React from "react";
import { IconProps } from "./types";

export const ProSquareLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 3h18v18H3zm2 2v14h14V5z" />
      </svg>
    );
  },
);

export default ProSquareLine;
