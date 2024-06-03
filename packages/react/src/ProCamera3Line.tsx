import * as React from "react";
import { IconProps } from "./types";

export const ProCamera3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 2H4v2h6z" />
        <path
          fill={color}
          d="M10 13a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="m2 6 1-1h18l1 1v14l-1 1H3l-1-1zm2 1v12h16V7z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProCamera3Line;
