import * as React from "react";
import { IconProps } from "./types";

export const ProSpamLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13V7h2v6zm0 2v2h2v-2z" />
        <path
          fill={color}
          d="m8.125 2.692 7.717-.014 5.466 5.447.014 7.717-5.447 5.466-7.717.014-5.466-5.447-.014-7.717zM4.68 8.982l.01 6.06 4.293 4.278 6.06-.01 4.277-4.293-.01-6.06-4.293-4.277-6.06.01z"
        />
      </svg>
    );
  },
);

export default ProSpamLine;
