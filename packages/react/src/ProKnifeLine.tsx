import * as React from "react";
import { IconProps } from "./types";

export const ProKnifeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M4.343 1.408 22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587zm.241 3.07-.051.11a6 6 0 0 0 1.048 6.535l.176.185 6.364 6.364 2.828-2.829z"
        />
      </svg>
    );
  },
);

export default ProKnifeLine;
