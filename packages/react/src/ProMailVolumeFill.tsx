import * as React from "react";
import { IconProps } from "./types";

export const ProMailVolumeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M2 6.536V21h10.25v-4.667l1-1h2.763l4.406-3.147L22 13V6.537l-10 7.727z"
        />
        <path
          fill={color}
          d="M14 21v-4h2.5l3.5-2.5v9L16.5 21zm7 0a2 2 0 1 0 0-4z"
        />
      </svg>
    );
  },
);

export default ProMailVolumeFill;
