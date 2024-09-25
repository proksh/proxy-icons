import * as React from "react";
import { IconProps } from "./types";

export const ProDoubleToggleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 1a5.5 5.5 0 1 0 0 11h9a5.5 5.5 0 1 0 0-11zM4 6.5A3.5 3.5 0 0 1 7.5 3h9a3.5 3.5 0 1 1 0 7h-9A3.5 3.5 0 0 1 4 6.5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M16.5 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
        <path
          fill={color}
          d="M7.5 12.5a5.5 5.5 0 1 0 0 11h9a5.5 5.5 0 1 0 0-11zM4 18a3.5 3.5 0 0 1 3.5-3.5h9a3.5 3.5 0 1 1 0 7h-9A3.5 3.5 0 0 1 4 18"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDoubleToggleLine;
