import * as React from "react";
import { IconProps } from "./types";

export const ProRouteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 3a3 3 0 0 0-1 5.83V17a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7.75H2l-.759 1.65 3.76 4.387L8.76 16.4 8 14.75H6V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V8.83A3.001 3.001 0 0 0 19 3"
        />
      </svg>
    );
  },
);

export default ProRouteFill;
