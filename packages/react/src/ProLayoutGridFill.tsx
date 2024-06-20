import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutGridFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 21h9v-8h-9zm-2 0v-8H2v8zM2 11h9V3H2zm11-8h9v8h-9z"
        />
      </svg>
    );
  },
);

export default ProLayoutGridFill;
