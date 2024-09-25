import * as React from "react";
import { IconProps } from "./types";

export const ProPriceTag2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4 2v2H8v-2zm0 5v-2H8v2z"
        />
        <path
          fill={color}
          d="M20 7.014 12 .728 4 7.014V22h16zM6 20V7.986l6-4.714 6 4.714V20z"
        />
      </svg>
    );
  },
);

export default ProPriceTag2Line;
