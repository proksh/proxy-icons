import * as React from "react";
import { IconProps } from "./types";

export const ProSkullLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <path
          fill={color}
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v5l-1 1h-3v3l-1 1H7l-1-1v-3H3l-1-1zm10-8a8 8 0 0 0-8 8v4h3l1 1v3h8v-3l1-1h3v-4a8 8 0 0 0-8-8"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSkullLine;
