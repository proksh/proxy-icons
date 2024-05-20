import * as React from "react";
import { IconProps } from "./types";

export const ProUploadCloudLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.293 12.293 1.414 1.414L11 12.414V16h2v-3.586l1.293 1.293 1.414-1.414L12 8.586z"
        />
        <path
          fill={color}
          d="M11 3a7 7 0 0 1 6.327 4.002L17.5 7a6.5 6.5 0 0 1 6.495 6.755Q24 13.877 24 14a6 6 0 0 1-6 6H5.5A5.5 5.5 0 0 1 4.046 9.195 7 7 0 0 1 11 3m4.733 5.384A5 5 0 0 0 6 10l.002.923-.892.098A3.5 3.5 0 0 0 5.5 18H18a4 4 0 0 0 3.995-4.196l-.002-.047.002-.047q.005-.105.005-.21a4.5 4.5 0 0 0-5.172-4.45l-.825.123z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUploadCloudLine;
