import * as React from "react";
import { IconProps } from "./types";

export const ProMicLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0V6a5 5 0 0 0-5-5M9 6a3 3 0 1 1 6 0v4a3 3 0 1 1-6 0z"
        />
        <path
          fill={color}
          d="M5 10a7 7 0 1 0 14 0h2a9 9 0 0 1-8 8.945V23h-2v-4.055A9 9 0 0 1 3 10z"
        />
      </svg>
    );
  },
);

export default ProMicLine;
