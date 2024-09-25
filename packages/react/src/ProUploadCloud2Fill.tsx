import * as React from "react";
import { IconProps } from "./types";

export const ProUploadCloud2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 3a7 7 0 0 1 6.327 4.002L17.5 7a6.5 6.5 0 0 1 6.495 6.755Q24 13.877 24 14a6 6 0 0 1-6 6h-1.172l1.293-1.293V15.88l-4.707-4.707h-2.828L5.879 15.88v2.828L7.172 20H5.5A5.5 5.5 0 0 1 4.046 9.195 7 7 0 0 1 11 3"
        />
        <path
          fill={color}
          d="m7.293 17.293 1.414 1.414L11 16.414V22h2v-5.586l2.293 2.293 1.414-1.414L12 12.586z"
        />
      </svg>
    );
  },
);

export default ProUploadCloud2Fill;
