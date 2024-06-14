import * as React from "react";
import { IconProps } from "./types";

export const ProEmojiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m6.5-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-6.7 1.9-1.6 1.2A6 6 0 0 0 12 17a6 6 0 0 0 4.8-2.4l-1.6-1.2A4 4 0 0 1 12 15a4 4 0 0 1-3.2-1.6"
        />
      </svg>
    );
  },
);

export default ProEmojiFill;
