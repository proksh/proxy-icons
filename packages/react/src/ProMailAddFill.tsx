import * as React from "react";
import { IconProps } from "./types";

export const ProMailAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v1.01l-10 7.726L2 4.01z" />
        <path fill={color} d="M2 6.536V21h12v-4.5h3.5V13H22V6.537l-10 7.727z" />
        <path fill={color} d="M21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2z" />
      </svg>
    );
  },
);

export default ProMailAddFill;
