import * as React from "react";
import { IconProps } from "./types";

export const ProEqualizerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.17 6H2V4h4.17a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0M2 13v-2h10.17a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0zm9.83 5a3.001 3.001 0 0 0-5.66 0H2v2h4.17a3.001 3.001 0 0 0 5.66 0H22v-2z"
        />
      </svg>
    );
  },
);

export default ProEqualizerFill;
