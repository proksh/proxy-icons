import * as React from "react";
import { IconProps } from "./types";

export const ProBluetoothFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.29 2v5.926l-3.251-3.12L5.96 6.972l4.662 4.473-4.662 4.474 2.078 2.164 3.25-3.12V22l2.595 1.026 5.21-5.555-.055-2.109-4.083-3.918 4.083-3.917-.066-2.224L13.763.86zm3 12.963 1.6 1.537-1.601 1.708zm0-7.037V5.251l1.475 1.259z"
        />
      </svg>
    );
  },
);

export default ProBluetoothFill;
