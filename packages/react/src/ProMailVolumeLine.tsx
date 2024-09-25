import * as React from "react";
import { IconProps } from "./types";

export const ProMailVolumeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h10v-2H4V7.227l8 7.111 8-7.11V13h2zm-2.505 2L12 11.662 4.506 5z"
        />
        <path
          fill={color}
          d="M14 17h2.5l3.5-2.5v9L16.5 21H14zm7 4a2 2 0 1 0 0-4z"
        />
      </svg>
    );
  },
);

export default ProMailVolumeLine;
