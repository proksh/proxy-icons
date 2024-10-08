import * as React from "react";
import { IconProps } from "./types";

export const ProTShirtAirFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h6.901l.193.75a3.002 3.002 0 0 0 5.812 0l.193-.75H22v9h-9a3 3 0 0 0-3 3v6H5v-9H2z"
        />
        <path
          fill={color}
          d="m12.439 16.168-1.08-.9 1.28-1.536 1.08.9c.77.64 1.88.67 2.68.068a4.16 4.16 0 0 1 5.161.132l1.08.9-1.28 1.536-1.08-.9a2.16 2.16 0 0 0-2.68-.068 4.16 4.16 0 0 1-5.161-.132m-1.079 3.1 1.079.9a4.16 4.16 0 0 0 5.16.132 2.16 2.16 0 0 1 2.68.069l1.08.9 1.28-1.537-1.079-.9a4.16 4.16 0 0 0-5.16-.132 2.16 2.16 0 0 1-2.68-.069l-1.08-.9z"
        />
      </svg>
    );
  },
);

export default ProTShirtAirFill;
