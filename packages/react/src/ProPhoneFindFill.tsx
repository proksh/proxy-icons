import * as React from "react";
import { IconProps } from "./types";

export const ProPhoneFindFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m5 3 1-1h12l1 1v8.528A6 6 0 1 0 15 22H6l-1-1z" />
        <path
          fill={color}
          d="M11 16a4 4 0 1 1 7.446 2.032l2.261 2.26-1.414 1.415-2.261-2.26A4 4 0 0 1 11 16m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </svg>
    );
  },
);

export default ProPhoneFindFill;
