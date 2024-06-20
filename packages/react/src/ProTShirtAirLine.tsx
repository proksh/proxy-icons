import * as React from "react";
import { IconProps } from "./types";

export const ProTShirtAirLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.901 3H2v9h3v9h5v-2H7v-9H4V5h3.416a5 5 0 0 0 9.168 0H20v5h-3v2h5V3h-6.901l-.194.75a3.002 3.002 0 0 1-5.81 0z"
        />
        <path
          fill={color}
          d="m12.439 16.168-1.08-.9 1.28-1.536 1.08.9c.77.64 1.88.67 2.68.068a4.16 4.16 0 0 1 5.161.132l1.08.9-1.28 1.536-1.08-.9a2.16 2.16 0 0 0-2.68-.068 4.16 4.16 0 0 1-5.161-.132m-1.079 3.1 1.079.9a4.16 4.16 0 0 0 5.16.132 2.16 2.16 0 0 1 2.68.069l1.08.9 1.28-1.537-1.079-.9a4.16 4.16 0 0 0-5.16-.132 2.16 2.16 0 0 1-2.68-.069l-1.08-.9z"
        />
      </svg>
    );
  },
);

export default ProTShirtAirLine;
