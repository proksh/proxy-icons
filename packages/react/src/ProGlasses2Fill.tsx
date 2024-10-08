import * as React from "react";
import { IconProps } from "./types";

export const ProGlasses2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 2h3v2H3v7a4.997 4.997 0 0 1 7.268 1.394A4 4 0 0 1 12 12c.62 0 1.208.141 1.732.393A5 5 0 0 1 18 10c1.126 0 2.164.372 3 1V4h-2V2h3l1 1v11.5h-.025q.025.247.025.5a5 5 0 1 1-9.95-.703A2 2 0 0 0 12 14a2 2 0 0 0-1.05.297q.05.345.05.703a5 5 0 1 1-9.975-.5H1V3z"
        />
      </svg>
    );
  },
);

export default ProGlasses2Fill;
