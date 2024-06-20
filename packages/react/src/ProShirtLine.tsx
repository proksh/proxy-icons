import * as React from "react";
import { IconProps } from "./types";

export const ProShirtLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 3H7v1H4L3 5v16l1 1h16l1-1V5l-1-1h-3zm-1.5 2h-7L12 8zM5 6h2v5l4-1.6V20H5zm8 14V9.4l4 1.6V6h2v8h-4v2h4v4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProShirtLine;
