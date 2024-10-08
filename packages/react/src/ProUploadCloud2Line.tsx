import * as React from "react";
import { IconProps } from "./types";

export const ProUploadCloud2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.733 8.384A5 5 0 0 0 6 10l.002.923-.892.098A3.5 3.5 0 0 0 5.5 18h1v2h-1A5.5 5.5 0 0 1 4.046 9.195a7.001 7.001 0 0 1 13.281-2.193L17.5 7a6.5 6.5 0 0 1 6.495 6.755Q24 13.877 24 14a6 6 0 0 1-6 6h-.5v-2h.5a4 4 0 0 0 3.995-4.196l-.002-.047.002-.047q.005-.105.005-.21a4.5 4.5 0 0 0-5.172-4.45l-.825.123z"
        />
        <path
          fill={color}
          d="m7.293 17.293 1.414 1.414L11 16.414V22h2v-5.586l2.293 2.293 1.414-1.414L12 12.586z"
        />
      </svg>
    );
  },
);

export default ProUploadCloud2Line;
