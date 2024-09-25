import * as React from "react";
import { IconProps } from "./types";

export const ProReplyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m1 12 10 8v-5h2a8.96 8.96 0 0 1 5.926 2.226 9 9 0 0 1 2.042 2.585 10.1 10.1 0 0 0-.429-3.82A10 10 0 0 0 11 9V3.999z"
        />
      </svg>
    );
  },
);

export default ProReplyFill;
