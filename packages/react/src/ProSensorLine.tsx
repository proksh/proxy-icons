import * as React from "react";
import { IconProps } from "./types";

export const ProSensorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2v4H2v2h2v12l1 1h14l1-1V8h2V6h-5V2h-2v5l1 1h2v11H6V8h2l1-1V2z"
        />
        <path fill={color} d="M11 8V2h2v6z" />
      </svg>
    );
  },
);

export default ProSensorLine;
