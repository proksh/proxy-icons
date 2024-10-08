import * as React from "react";
import { IconProps } from "./types";

export const ProUsbLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1 3 5h-2v7.382l3-1.5V11h-1V7h4v4h-1v2.118l-5 2.5v1.553a3.001 3.001 0 1 1-2.313.13L6 14.022v-2.289A2 2 0 0 1 7 8a2 2 0 0 1 1 3.732v1.247l3 2.1V6H9zm0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </svg>
    );
  },
);

export default ProUsbLine;
