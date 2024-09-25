import * as React from "react";
import { IconProps } from "./types";

export const ProBeerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 8.236V21l1 1h12l1-1v-1h3l1-1v-9l-1-1h-3v-.354a4 4 0 0 0-4.896-6.169 3.998 3.998 0 0 0-6.593.566A3 3 0 0 0 3 8.236m4.052-3.693a2.001 2.001 0 0 1 3.822-.244 1 1 0 0 0 1.666.334A2 2 0 0 1 15.732 7H5a1 1 0 1 1 .539-1.843 1 1 0 0 0 1.513-.614M17 18v-7h2v7zM7 18v-7h2v7zm4 0v-7h2v7z"
        />
      </svg>
    );
  },
);

export default ProBeerFill;
