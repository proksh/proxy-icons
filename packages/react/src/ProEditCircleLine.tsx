import * as React from "react";
import { IconProps } from "./types";

export const ProEditCircleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20.4 2-9.193 9.192v1.415h1.414l5.617-5.617 1.42-1.42 2.156-2.156z"
        />
        <path
          fill={color}
          d="M20 12c0-1.159-.246-2.26-.69-3.254l1.494-1.493A9.96 9.96 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.62 0 3.15.385 4.503 1.069l-1.51 1.51A8 8 0 1 0 20 12"
        />
      </svg>
    );
  },
);

export default ProEditCircleLine;
