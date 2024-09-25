import * as React from "react";
import { IconProps } from "./types";

export const ProArtboard2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 5V2h-2v3zM6 6h12v12H6zm2 2v8h8V8zm10 11v3h-2v-3zM8 2v3H6V2zm0 20v-3H6v3zM22 8h-3V6h3zm-3 10h3v-2h-3zM5 18H2v-2h3zM2 8h3V6H2z"
        />
      </svg>
    );
  },
);

export default ProArtboard2Line;
