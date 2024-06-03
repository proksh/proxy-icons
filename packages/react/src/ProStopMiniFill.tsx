import * as React from "react";
import { IconProps } from "./types";

export const ProStopMiniFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 6 6 7v10l1 1h10l1-1V7l-1-1z" />
      </svg>
    );
  },
);

export default ProStopMiniFill;
