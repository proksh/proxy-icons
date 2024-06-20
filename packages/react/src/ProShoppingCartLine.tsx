import * as React from "react";
import { IconProps } from "./types";

export const ProShoppingCartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 4H2V2h3l1 1v12h12.22l2-8H8V5h13.5l.97 1.243-2.5 10L19 17H5l-1-1z"
        />
        <path
          fill={color}
          d="M4 4H2V2h3l1 1v12h12.22l2-8H8V5h13.5l.97 1.243-2.5 10L19 17H5l-1-1z"
        />
        <path
          fill={color}
          d="M4 4H2V2h3l1 1v12h12.22l2-8H8V5h13.5l.97 1.243-2.5 10L19 17H5l-1-1zm4 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
        <path fill={color} d="M8 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <path
          fill={color}
          d="M8 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
        <path fill={color} d="M18 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path fill={color} d="M18 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </svg>
    );
  },
);

export default ProShoppingCartLine;
