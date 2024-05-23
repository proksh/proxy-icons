import * as React from "react";
import { IconProps } from "./types";

export const ProShieldCrossFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3.757 3.03 8-2h.486l8 2L21 4v12l-.4.8-8.6 6.45-8.6-6.45L3 16V4zM11 15v-3H8v-2h3V7h2v3h3v2h-3v3z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProShieldCrossFill;
