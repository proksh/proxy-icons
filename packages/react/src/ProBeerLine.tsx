import * as React from "react";
import { IconProps } from "./types";

export const ProBeerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 11v7h2v-7zm4 7v-7h2v7z" />
        <path
          fill={color}
          d="M2 6a3 3 0 0 1 3.51-2.957 3.998 3.998 0 0 1 6.594-.566A4 4 0 0 1 17 8.646V9h3l1 1v9l-1 1h-3v1l-1 1H4l-1-1V8.236C2.386 7.686 2 6.888 2 6m7-3c-.946 0-1.741.658-1.948 1.543a1 1 0 0 1-1.513.614A1 1 0 1 0 5 7h10.733a2 2 0 0 0-3.192-2.367 1 1 0 0 1-1.667-.334A2 2 0 0 0 9 3m8 8v7h2v-7zm-2-2H5v11h10z"
        />
      </svg>
    );
  },
);

export default ProBeerLine;
