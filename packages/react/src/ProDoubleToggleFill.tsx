import * as React from "react";
import { IconProps } from "./types";

export const ProDoubleToggleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
        <path
          fill={color}
          d="M7.5 1a5.5 5.5 0 1 0 0 11h9a5.5 5.5 0 1 0 0-11zM4 6.5A3.5 3.5 0 0 1 7.5 3h9a3.5 3.5 0 1 1 0 7h-9A3.5 3.5 0 0 1 4 6.5m3.5 6a5.5 5.5 0 1 0 0 11h9a5.5 5.5 0 1 0 0-11zM14 18a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        />
      </svg>
    );
  },
);

export default ProDoubleToggleFill;
