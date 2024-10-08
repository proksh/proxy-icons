import * as React from "react";
import { IconProps } from "./types";

export const ProKnifeBloodLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.343 1.408 22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5 8 16.38V19a1 1 0 1 1-2 0v-4a1 1 0 0 0-1.993-.117L4.001 15v1a1 1 0 1 1-2 0V7.214A7.98 7.98 0 0 1 4.17 1.587zm.241 3.07-.051.11a6 6 0 0 0-.522 2.103l-.01.31v.119a5.98 5.98 0 0 0 1.58 4.003l.176.185 6.364 6.364 2.828-2.829z"
        />
      </svg>
    );
  },
);

export default ProKnifeBloodLine;
