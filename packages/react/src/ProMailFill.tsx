import * as React from "react";
import { IconProps } from "./types";

export const ProMailFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 6.536V21h20V6.537l-10 7.727z" />
      </svg>
    );
  },
);

export default ProMailFill;
