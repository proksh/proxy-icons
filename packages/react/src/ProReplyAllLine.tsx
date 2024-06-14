import * as React from "react";
import { IconProps } from "./types";

export const ProReplyAllLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 9V4.5L6 12l8 7.5V15h2c2.196 0 4.21.787 5.772 2.094a9 9 0 0 1 2.196 2.717 10.1 10.1 0 0 0-.429-3.82A10 10 0 0 0 14 9m-2 2h2a7.98 7.98 0 0 1 6.055 2.772A11 11 0 0 0 16 13h-4v1.883L8.924 12 12 9.116z"
        />
        <path
          fill={color}
          d="M8.678 6.735 2.974 12l5.704 5.265-1.357 1.47L.025 12l7.296-6.735z"
        />
      </svg>
    );
  },
);

export default ProReplyAllLine;
