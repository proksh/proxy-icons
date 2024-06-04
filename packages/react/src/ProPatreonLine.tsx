import * as React from "react";
import { IconProps } from "./types";

export const ProPatreonLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.001 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-13-13h5v20h-5zm2 2v16h1V4z"
        />
      </svg>
    );
  },
);

export default ProPatreonLine;
