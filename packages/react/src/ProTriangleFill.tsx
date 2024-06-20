import * as React from "react";
import { IconProps } from "./types";

export const ProTriangleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M23.258 21 12 1.5.74 21z" />
      </svg>
    );
  },
);

export default ProTriangleFill;
