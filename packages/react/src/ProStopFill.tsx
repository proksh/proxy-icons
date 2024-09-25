import * as React from "react";
import { IconProps } from "./types";

export const ProStopFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 4 4 5v14l1 1h14l1-1V5l-1-1z" />
      </svg>
    );
  },
);

export default ProStopFill;
