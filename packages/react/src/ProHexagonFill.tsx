import * as React from "react";
import { IconProps } from "./types";

export const ProHexagonFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.578 2.34H6.423L.846 12l5.577 9.66h11.155L23.155 12z"
        />
      </svg>
    );
  },
);

export default ProHexagonFill;
