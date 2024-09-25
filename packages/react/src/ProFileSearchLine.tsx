import * as React from "react";
import { IconProps } from "./types";

export const ProFileSearchLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 11a4 4 0 1 1 7.446 2.032l2.261 2.26-1.414 1.415-2.261-2.26A4 4 0 0 1 7 11m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm12 2H5v16h14V8h-4z" />
      </svg>
    );
  },
);

export default ProFileSearchLine;
