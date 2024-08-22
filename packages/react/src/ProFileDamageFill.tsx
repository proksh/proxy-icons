import * as React from "react";
import { IconProps } from "./types";

export const ProFileDamageFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h11v6l1 1h6v13H3v-8l4 2.5 3-3.5 3 4 2-2.5 3 .5-3-3-2 2.5-3-5L6.5 13 3 10z"
        />
        <path fill={color} d="M20.914 7 16 2.086V7z" />
      </svg>
    );
  },
);

export default ProFileDamageFill;
