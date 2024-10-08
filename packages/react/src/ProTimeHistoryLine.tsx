import * as React from "react";
import { IconProps } from "./types";

export const ProTimeHistoryLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 6V3.5H2v6h6v-2H5.384A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2a9.99 9.99 0 0 0-8 4"
        />
        <path
          fill={color}
          d="M14.793 16.207 11 12.414V7h2v4.586l3.207 3.207z"
        />
      </svg>
    );
  },
);

export default ProTimeHistoryLine;
