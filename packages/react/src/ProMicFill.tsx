import * as React from "react";
import { IconProps } from "./types";

export const ProMicFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0V6a5 5 0 0 0-5-5"
        />
        <path
          fill={color}
          d="M12 17a7 7 0 0 1-7-7H3a9 9 0 0 0 8 8.945V23h2v-4.055A9 9 0 0 0 21 10h-2a7 7 0 0 1-7 7"
        />
      </svg>
    );
  },
);

export default ProMicFill;
