import * as React from "react";
import { IconProps } from "./types";

export const ProTShirt2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h6.901l.193.75a3.002 3.002 0 0 0 5.812 0l.193-.75H22v9h-3v9H5v-9H2zm2 2v5h3v9h10v-9h3V5h-3.416a5 5 0 0 1-9.168 0z"
        />
      </svg>
    );
  },
);

export default ProTShirt2Line;
