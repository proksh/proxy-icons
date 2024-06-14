import * as React from "react";
import { IconProps } from "./types";

export const ProReplyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 13v2.839L4.202 12 9 8.161V11h2a7.98 7.98 0 0 1 6.055 2.772A11 11 0 0 0 13 13zm2 7v-5h2c2.196 0 4.21.787 5.772 2.094a9 9 0 0 1 2.196 2.717 10.1 10.1 0 0 0-.429-3.82A10 10 0 0 0 11 9V4L1 12z"
        />
      </svg>
    );
  },
);

export default ProReplyLine;
