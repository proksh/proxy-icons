import * as React from "react";
import { IconProps } from "./types";

export const ProEditBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m20.4 2-9.193 9.192v1.415h1.414l9.193-9.193z" />
        <path
          fill={color}
          d="M19 19V9.056l2-2V20l-1 1H4l-1-1V4l1-1h12.571l-2 2H5v14z"
        />
      </svg>
    );
  },
);

export default ProEditBoxLine;
