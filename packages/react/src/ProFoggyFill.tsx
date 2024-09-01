import * as React from "react";
import { IconProps } from "./types";

export const ProFoggyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.315 6.002A7.001 7.001 0 0 0 4.033 8.194 5.5 5.5 0 0 0 .01 13h23.977v-.5a6.5 6.5 0 0 0-6.672-6.498M3.987 19h17v2h-17zm20-4H.01v2h23.977z"
        />
      </svg>
    );
  },
);

export default ProFoggyFill;
