import * as React from "react";
import { IconProps } from "./types";

export const ProSurgicalMaskLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 2.97 9 2.25v1.906a4.002 4.002 0 0 1-.357 7.823 6 6 0 0 1-2.96 3.327L12 21.118l-5.683-2.842a6 6 0 0 1-2.96-3.327A4.001 4.001 0 0 1 3 7.126V5.219zM3 9.267a2 2 0 0 0 0 3.464zM22 11a2 2 0 0 0-1-1.732v3.464A2 2 0 0 0 22 11M5 6.78v6.13a4 4 0 0 0 2.211 3.578L12 18.882l4.789-2.395A4 4 0 0 0 19 12.91V6.78l-7-1.75z"
        />
      </svg>
    );
  },
);

export default ProSurgicalMaskLine;
