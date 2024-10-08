import * as React from "react";
import { IconProps } from "./types";

export const ProEqualizerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.17 6a3.001 3.001 0 0 0 5.66 0H22V4H11.83a3.001 3.001 0 0 0-5.66 0H2v2zM8 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6.17 20a3.001 3.001 0 0 0 5.66 0H22v-2H11.83a3.001 3.001 0 0 0-5.66 0H2v2zM8 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0m9.83-6H22v-2h-4.17a3.001 3.001 0 0 0-5.66 0H2v2h10.17a3.001 3.001 0 0 0 5.66 0M14 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        />
      </svg>
    );
  },
);

export default ProEqualizerLine;
