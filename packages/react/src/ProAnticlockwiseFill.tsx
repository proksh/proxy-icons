import * as React from "react";
import { IconProps } from "./types";

export const ProAnticlockwiseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 9.5V8a3 3 0 0 1 3-3h4V3H9a5 5 0 0 0-5 5v1.5H1.5l-.707 1.707 3.5 3.5h1.414l3.5-3.5L8.5 9.5zM10 20l1 1h10l1-1V10l-1-1H11l-1 1z"
        />
      </svg>
    );
  },
);

export default ProAnticlockwiseFill;
