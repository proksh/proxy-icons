import * as React from "react";
import { IconProps } from "./types";

export const ProEqualizer3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3v3H3v2h4v3h3V3zm14 15h-4v3h-3v-8h3v3h4zm0-10h-9V6h9zm-9 8H3v2h9z"
        />
      </svg>
    );
  },
);

export default ProEqualizer3Fill;
