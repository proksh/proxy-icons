import * as React from "react";
import { IconProps } from "./types";

export const ProFlowerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 5.041q-.432.036-.855.102l-.264.044a11.98 11.98 0 0 0-6.58 3.547A13.94 13.94 0 0 1 16 17c0 1.528-.245 2.998-.697 4.375A9 9 0 0 0 21 13zm-8.066 16.911A12 12 0 0 0 14 17c0-2.453-.736-4.735-2-6.636A11.94 11.94 0 0 0 10 17c0 1.766.381 3.442 1.066 4.952a9 9 0 0 0 1.868 0m-4.237-.577A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266a11.98 11.98 0 0 0-6.581-3.547l-.264-.044A12 12 0 0 0 3 5.04V13a9 9 0 0 0 5.697 8.375m6.668-16.706C13.907 3.13 12 2 12 2s-1.907 1.13-3.365 2.669A14 14 0 0 1 12 7.202a14 14 0 0 1 3.365-2.533"
        />
      </svg>
    );
  },
);

export default ProFlowerFill;
