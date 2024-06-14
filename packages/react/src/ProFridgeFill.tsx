import * as React from "react";
import { IconProps } from "./types";

export const ProFridgeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 2 1-1h14l1 1v8H4zm3.5 3v3h2V5zM4 12v10l1 1h14l1-1V12zm3.5 6.5v-4h2v4z"
        />
      </svg>
    );
  },
);

export default ProFridgeFill;
