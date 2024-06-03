import * as React from "react";
import { IconProps } from "./types";

export const ProMemoriesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.3 6.386 1.407 1.407L7 9.5H2v-5l1.707-.707 1.18 1.18A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 2.3-5.614"
        />
        <path fill={color} d="m9.75 9 .757-.429 5 3v.858l-5 3L9.75 15z" />
      </svg>
    );
  },
);

export default ProMemoriesFill;
