import * as React from "react";
import { IconProps } from "./types";

export const ProFolder2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.414 3H2v18h20V5h-9.586zM20 9H4V5h5.586l2 2H20zM4 11h16v8H4z"
        />
      </svg>
    );
  },
);

export default ProFolder2Line;
