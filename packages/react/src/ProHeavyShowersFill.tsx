import * as React from "react";
import { IconProps } from "./types";

export const ProHeavyShowersFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.327 6.002A7.001 7.001 0 0 0 4.046 8.194 5.502 5.502 0 0 0 5.5 19H6v-5h4v2h4v-2h4v5a6 6 0 0 0 5.995-6.245Q24 12.627 24 12.5a6.5 6.5 0 0 0-6.673-6.498"
        />
        <path fill={color} d="M7 21v-6h2v6zm4 2v-6h2v6zm4-8v6h2v-6z" />
      </svg>
    );
  },
);

export default ProHeavyShowersFill;
