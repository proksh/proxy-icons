import * as React from "react";
import { IconProps } from "./types";

export const ProPriceTag3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m21.198 2.879 1.212 10.064-10.596 10.558L.5 12.23 11.097 1.67zm-7.264 7.236a2.005 2.005 0 0 0 2.829 0 1.987 1.987 0 0 0 0-2.818 2.005 2.005 0 0 0-2.829 0 1.99 1.99 0 0 0 0 2.818"
        />
      </svg>
    );
  },
);

export default ProPriceTag3Fill;
