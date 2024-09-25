import * as React from "react";
import { IconProps } from "./types";

export const ProPhoneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 20.963q-.558.037-1.125.037C10.555 21 3 13.445 3 4.125Q3 3.558 3.037 3h5.122c.24 2.09.92 4.046 1.946 5.773L8.11 10.335a14.13 14.13 0 0 0 5.84 5.708l1.426-2.062A14.5 14.5 0 0 0 21 15.841z"
        />
      </svg>
    );
  },
);

export default ProPhoneFill;
