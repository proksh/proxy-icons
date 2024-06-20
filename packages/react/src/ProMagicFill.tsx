import * as React from "react";
import { IconProps } from "./types";

export const ProMagicFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.834 9.877 3.93 4.714 5.214 3.43l5.163 1.903L14.7 1.928l1.618.824-.215 5.499 4.575 3.058-.284 1.793-5.296 1.495-1.495 5.296-1.793.284-3.058-4.575-5.499.215-.824-1.618z"
        />
        <path
          fill={color}
          d="m16.182 17.096 4.243 4.243 1.414-1.415-4.243-4.242z"
        />
      </svg>
    );
  },
);

export default ProMagicFill;
