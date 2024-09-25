import * as React from "react";
import { IconProps } from "./types";

export const ProFileExcelLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.021 8H13.58L12 10.256 10.42 8H7.98l2.8 4-2.8 4h2.441l1.58-2.256L13.58 16h2.44l-2.8-4z"
        />
        <path fill={color} d="M15.914 2H3v20h18V7.086zM15 4v4h4v12H5V4z" />
      </svg>
    );
  },
);

export default ProFileExcelLine;
