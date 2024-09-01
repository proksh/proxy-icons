import * as React from "react";
import { IconProps } from "./types";

export const ProFileChart2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm12.326 13.222A4 4 0 0 0 16 13h-4V9a4 4 0 1 0 3.326 6.222"
        />
      </svg>
    );
  },
);

export default ProFileChart2Fill;
