import * as React from "react";
import { IconProps } from "./types";

export const ProSurgicalMaskFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m21 5.22-9-2.25-9 2.25v1.906a4.002 4.002 0 0 0 .357 7.823 6 6 0 0 0 2.96 3.327L12 21.118l5.683-2.842a6 6 0 0 0 2.96-3.327A4.001 4.001 0 0 0 21 7.126zM3 12.731a2 2 0 0 1 0-3.464zM22 11a2 2 0 0 1-1 1.732V9.268A2 2 0 0 1 22 11"
        />
      </svg>
    );
  },
);

export default ProSurgicalMaskFill;
