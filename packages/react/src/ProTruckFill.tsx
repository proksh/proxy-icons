import * as React from "react";
import { IconProps } from "./types";

export const ProTruckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 5h16v3h3.015L23 12.18V18h-2.035a3.501 3.501 0 0 1-6.93 0h-5.07a3.5 3.5 0 0 1-6.93 0H1zm16 8h4v-.18L18.985 10H17z"
        />
      </svg>
    );
  },
);

export default ProTruckFill;
