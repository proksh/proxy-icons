import * as React from "react";
import { IconProps } from "./types";

export const ProOpenbaseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 2.76 10 3.236-.9 9.468-9.1 6.86-9.1-6.864L2.01 6zm0 .825-8.81 2.85L12 20.793l8.806-14.358z"
        />
      </svg>
    );
  },
);

export default ProOpenbaseFill;
