import * as React from "react";
import { IconProps } from "./types";

export const ProSensorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M7 6V2h2v5L8 8H6v2h12V8h-2l-1-1V2h2v4h5v2h-2v12l-1 1H5l-1-1V8H2V6z"
        />
        <path fill={color} d="M11 2v6h2V2z" />
      </svg>
    );
  },
);

export default ProSensorFill;
